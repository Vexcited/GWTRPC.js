import * as cheerio from "cheerio";
import { parse } from "meriyah";
import { traverse } from "estree-toolkit";

export async function getEntrypoint(
  baseUrl: string,
  extraHeaders?: Record<string, string>
): Promise<string> {
  const base_response = await fetch(baseUrl, { headers: extraHeaders });

  const html = await base_response.text();
  const $ = cheerio.load(html);

  const main_nocache_path = $("script[language=javascript]")
    .filter((_, el) => el.attribs.src.endsWith(".nocache.js"))
    .attr("src");

  if (!main_nocache_path)
    throw new Error(
      "Not able to find any 'nocache.js' entrypoint, are you sure this is a GWT web app?"
    );

  const appName = main_nocache_path.split(".")[0];
  console.log(appName);

  {
    const response = await fetch(new URL(main_nocache_path, base_response.url));
    const entrypoint = parse(await response.text());

    const possible_hashes = traverse(entrypoint, {
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

          // We're looking for an hash.
          if (declaration.init.value.length === 32) {
            const hash = declaration.init.value;

            // TODO: find out if .cache.js or .cache.html depending on declarations
            const url = new URL(`${hash}.cache.html`, response.url);

            console.log(url);
          }
        }
      },
    });

    // TODO
    return "";
  }
}

const entrypoint = await getEntrypoint("https://planning.unilim.fr", {
  cookie: "JSESSIONID=",
});

console.log(entrypoint);
