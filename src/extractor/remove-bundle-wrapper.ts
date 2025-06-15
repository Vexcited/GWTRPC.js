import { is, traverse } from "estree-toolkit";
import { join } from "./utils/join";
import { parse } from "meriyah";

/**
 * On some versions of the obfuscated bundle,
 * we can have a wrapper around the code which calls a
 * `onScriptDownloaded` function with the code splitted into multiple arrays.
 */
export const remove_bundle_wrapper = (bundle: string): string => {
  if (!bundle.includes("onScriptDownloaded")) return bundle;

  const program = parse(bundle, { webcompat: true });

  traverse(program, {
    ArrayExpression(path) {
      if (!path.node) return;
      const array = path.node.elements;

      const bundles = array
        .filter((el) => is.literal(el))
        .map((literal) => literal.value as string);

      bundle = join(bundles);
      this.stop(); // prevent useless traversals.
    }
  });

  return bundle;
};
