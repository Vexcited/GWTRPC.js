import fs from "node:fs/promises";
import * as cheerio from "cheerio";
import { parse } from "meriyah";
import { traverse } from "estree-toolkit";

const html = await fs.readFile("rennes.html", "utf8");
const $ = cheerio.load(html);

const scripts = $("script")
  .map((_, el) => $(el).text())
  .toArray()
  .join("");

const program = parse(scripts, { webcompat: true });

let strongName: string | undefined;
let gwtVersion: string | undefined;

const services = [] as Array<{
  name: string;
  module_hash: string;
}>;

traverse(program, {
  VariableDeclaration(path) {
    const declaration = path.node?.declarations[0];
    if (!declaration) return;

    if (
      declaration.id.type === "Identifier" &&
      declaration.id.name === "$strongName" &&
      declaration.init?.type === "Literal"
    )
      strongName = declaration.init.value as string;

    if (
      declaration.id.type === "Identifier" &&
      declaration.id.name === "$gwt_version" &&
      declaration.init?.type === "Literal"
    )
      gwtVersion = declaration.init.value as string;
  },

  CallExpression(path) {
    // Get all service interfaces.
    if (
      path.node?.arguments.length === 5 &&
      path.node.arguments[0].type === "ThisExpression" &&
      path.node.arguments[2].type === "Literal" &&
      typeof path.node.arguments[2].value === "string" &&
      path.node.arguments[3].type === "Literal" &&
      typeof path.node.arguments[3].value === "string"
    ) {
      services.push({
        name: path.node.arguments[2].value,
        module_hash: path.node.arguments[3].value,
      });
    }
  },
});

const paths =
  "https://planning.unilim.fr/direct/gwtdirectplanning/4F840DD81250505F31B0C94A7BD75D1C.cache.html".split(
    "/"
  );
paths.pop();
const moduleBase = paths.join("/") + "/";

const appName = "gwtdirectplanning"; // see `find-cache.ts`

console.log(services, gwtVersion, {
  "Content-Type": "text/x-gwt-rpc; charset=utf-8",
  "X-GWT-Permutation": strongName,
  "X-GWT-Module-Base": moduleBase,
});
