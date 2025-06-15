import { type types, is } from "estree-toolkit";

export const literal_or_global_string = (
  globals: Record<string, string>,
  expr: types.Expression,
): string => {
  if (is.literal(expr)) return expr.value as string;
  else if (is.identifier(expr)) return globals[expr.name];

  throw new Error("expression is not a literal neither a global reference");
};
