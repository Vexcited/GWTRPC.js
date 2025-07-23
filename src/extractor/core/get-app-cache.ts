import * as cheerio from "cheerio";
import { parse } from "meriyah";
import { is, traverse } from "estree-toolkit";

export interface AppCache {
  /** Name of the app internally. */
  name: string;
  /** URL of the app's cache, could be whether JS or HTML. */
  url: string;
}

export const getAppCache = async (
  appUrl: string,
  extraHeaders?: Record<string, string>
): Promise<AppCache> => {
  let response = await fetch(appUrl, { headers: extraHeaders });

  const html = await response.text();
  const $ = cheerio.load(html);

  const noCachePath = $("script[language=javascript]")
    .filter((_, el) => el.attribs.src.endsWith(".nocache.js"))
    .attr("src");

  if (!noCachePath)
    throw new Error(
      "Not able to find any 'nocache.js' entrypoint, are you sure this is a GWT web app?"
    );

  response = await fetch(new URL(noCachePath, response.url));
  const entrypoint = parse(await response.text());

  const appName = noCachePath.split(".")[0].split("/")[1]!;
  let shouldUseHtml = false;
  let hash: string | undefined;

  {
    const hashes = {} as Record<string, string>;
    let safariVariableIdentifier: string | undefined;

    traverse(entrypoint, {
      VariableDeclaration(path) {
        if (!path.node) return;

        // All the initial variables are typically stored into
        // a long `var` declarations, there's more than 20 in there.
        // `20` is simply for not taking any single declaration not useful.
        if (path.node.kind !== "var") return;
        if (path.node.declarations.length < 20) return;

        for (const declaration of path.node.declarations) {
          if (!declaration.init) continue;

          if (
            declaration.id.type !== "Identifier" ||
            declaration.init.type !== "Literal" ||
            typeof declaration.init.value !== "string"
          )
            continue;

          if (declaration.init.value.length === 32) {
            hashes[declaration.id.name] = declaration.init.value;
            continue;
          }

          switch (declaration.init.value) {
            case ".cache.html":
              shouldUseHtml = true;
              break;

            case "safari":
              safariVariableIdentifier = declaration.id.name;
              break;
          }
        }
      },

      CallExpression(path) {
        if (!path.node) return;

        const args = path.node.arguments;
        if (args.length !== 2) return;

        const arg0 = args[0];
        const arg0_ok = is.arrayExpression(arg0);

        const arg1 = args[1];
        const arg1_ok = is.identifier(arg1);

        if (!arg0_ok || !arg1_ok) return;

        for (let i = 0; i < arg0.elements.length; i++) {
          // 0 = lang
          // 1 = browser

          let v = arg0.elements[i];
          if (!is.identifier(v)) return;
          if (i === 1 && v.name !== safariVariableIdentifier) return;
        }

        hash = hashes[arg1.name];
        this.stop();
      },
    });

    if (!hash) throw new Error("was not able to find the hash");
  }

  const cacheUrl = new URL(
    `${hash}.cache.${shouldUseHtml ? "html" : "js"}`,
    response.url
  );

  return {
    name: appName,
    url: cacheUrl.href,
  };
};
