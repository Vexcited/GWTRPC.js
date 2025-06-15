import type { Program } from "../utils/types";
import { is, traverse } from "estree-toolkit";

/**
 * Extracts only the strings defined
 * in the main scope using `var`.
 */
export const extract_globals = (bundle: Program): Record<string, string> => {
  const globals: Record<string, string> = {};

  traverse(bundle, {
    VariableDeclaration({ node }) {
      if (!node || node.kind !== "var") return;

      for (const declaration of node.declarations) {
        if (!declaration.init) continue;

        if (
          !is.identifier(declaration.id) ||
          !is.literal(declaration.init) ||
          typeof declaration.init.value !== "string"
        ) continue;

        globals[declaration.id.name] = declaration.init.value;
      }
    }
  });

  return globals;
}
