import type { Scope, types } from "estree-toolkit";

export const get_function_node = (scope: Scope, statement: types.Statement): types.FunctionDeclaration => {
  const call = <types.CallExpression>(<types.ExpressionStatement>statement).expression;
  const id = <types.Identifier>call.callee;

  const binding = scope.getBinding(id.name);
  if (!binding) throw new Error(`was not able to find binding to '${id.name}' function`);

  return <types.FunctionDeclaration>binding.path.node;
};
