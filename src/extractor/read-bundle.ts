import { remove_bundle_wrapper } from "./remove-bundle-wrapper";
import type { Program } from "./utils/types";
import { join } from "./utils/join";

import * as cheerio from "cheerio";
import { parse } from "meriyah";

export const read_bundle = (path: string, bundle: string): Program => {
  if (path.endsWith(".html")) {
    const $ = cheerio.load(bundle);

    const scripts = $("script").map(
      (_, el) => $(el).text()
    );

    bundle = join(scripts.toArray());
  }
  else if (path.endsWith(".js")) {
    bundle = remove_bundle_wrapper(bundle);
  }
  else throw new Error("given file is not a GWT bundle file");

  return parse(bundle, { webcompat: true });
};
