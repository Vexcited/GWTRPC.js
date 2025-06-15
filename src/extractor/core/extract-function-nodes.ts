import { get_function_node } from "../utils/get-function-node";
import type { Program } from "../utils/types";
import { traverse, is, types } from "estree-toolkit";

export const extract_function_nodes = (bundle: Program) => {
  let $start: types.FunctionDeclaration | undefined;
  let $writeString: types.FunctionDeclaration | undefined;
  let $writeInt: types.FunctionDeclaration | undefined;
  let $addString: types.FunctionDeclaration | undefined;
  let append: types.FunctionDeclaration | undefined;

  // defined if the service uses `Boolean`, `Integer`, and custom objects.
  let $writeObject: types.FunctionDeclaration | undefined;

  traverse(bundle, {
    $: { scope: true },

    FunctionDeclaration({ node, scope }) {
      if (!node || !scope) return;
      const body = node.body.body;

      // We'll start by looking at the `$start` function, a lot of functions
      // could be recovered from there!
      //
      // >>> function $start (this$static, remoteServiceInterfaceName, paramCount)
      if (node.params.length === 3 && body.length > 5 && body.length < 8) {
        const stmt = body[0];

        // >>> !!$stats && $stats_0(...)
        if (is.expressionStatement(stmt)) {
          const expr = stmt.expression;

          if (is.logicalExpression(expr) && expr.operator === "&&" &&
            is.unaryExpression(expr.left) &&
            //                      ^ !!$stats
            is.callExpression(expr.right)
            //                     ^ $stats_0(...)
          ) {
            const unary = expr.left;
            //                 ^ !!$stats

            if (
              // >> !!$stats
              unary.prefix && unary.operator === "!" &&
              is.unaryExpression(unary.argument) &&

              // >>> !$stats
              unary.argument.prefix && unary.argument.operator === "!" &&
              // >>> $stats
              // $stats is actually constantly named the same way even if obfuscated
              // while $stats_0(...) is obfuscated like every other functions.
              is.identifier(unary.argument.argument) && unary.argument.argument.name === "$stats"
            ) {
              $start = node;

              // $writeString is used in the n-3th and n-4th statements.
              const writeStringFnNode1 = get_function_node(scope, body.at(-3)!);
              const writeStringFnNode2 = get_function_node(scope, body.at(-4)!);

              if (writeStringFnNode1 === writeStringFnNode2) {
                $writeString = writeStringFnNode1;

                // `$writeInt` is used in the n-1th statement.
                $writeInt = get_function_node(scope, body.at(-2)!);

                // We can also use `$writeInt` to extract `append`...
                append = get_function_node(scope, $writeInt.body.body[0]);
              }
            }
          }
        }
      }

      // We'll look for `$addString` and `$writeObject`.
      // >>> $addString(this$static, string)
      // >>> $writeObject(this$static, instance)
      else if (node.params.length === 2 && is.identifier(node.params[0]) && is.identifier(node.params[1])) {
        const [vars, if_stmt] = body;

        if (is.variableDeclaration(vars) && is.ifStatement(if_stmt)) {
          const vars_ok = vars.kind === "var" && vars.declarations.map(decl => !decl.init)

          // >>> if (string == null)
          // >>> if (instance == null)
          const if_stmt_test_ok = is.binaryExpression(if_stmt.test) && if_stmt.test.operator === "==" &&
            // >>> `string` or `instance` (reference to function's second argument)
            is.identifier(if_stmt.test.left) && if_stmt.test.left.name === node.params[1].name &&
            // >>> null
            is.literal(if_stmt.test.right) && !if_stmt.test.right.value

          const if_stmt_ok = if_stmt_test_ok && !if_stmt.alternate;

          if (vars_ok && if_stmt_ok && is.blockStatement(if_stmt.consequent)) {

            // >>> return 0;
            if (if_stmt.consequent.body.length === 1) {
              $addString = node;
            }

            else if (if_stmt.consequent.body.length === 2) {
              const [expr, ret] = if_stmt.consequent.body;

              // PRE 2.6:
              // >>> $writeInt(this$static, $addString(this$static, null));
              //
              // POST 2.6:
              // >>> $append(this$static, "" + $addString(this$static, null));
              //
              // We won't look further than if it's a simple call expression.
              const expr_ok = is.expressionStatement(expr) && is.callExpression(expr.expression);

              // >>> return;
              const ret_ok = is.returnStatement(ret) && !ret.argument;

              if (expr_ok && ret_ok) {
                $writeObject = node;
              }
            }
          }
        }
      }
    },
  });

  if (
    !$start ||
    !$writeString ||
    !$writeInt ||
    !$addString ||
    !append
  ) throw new Error("$start, $writeString, $writeInt, $addString, append function nodes were not found");

  let $append: types.FunctionDeclaration | undefined;

  traverse(bundle, {
    FunctionDeclaration({ node }) {
      if (!node) return;
      const body = node.body.body;

      // We'll look for `$append` function
      // >>> $append(this$static, token)
      if (node.params.length === 2 && body.length === 1 && is.identifier(node.params[0]) && is.identifier(node.params[1])) {
        const stmt = body[0];

        // >>> append(this$static.encodeBuffer, token)
        if (is.expressionStatement(stmt) && is.callExpression(stmt.expression)) {
          const call = stmt.expression;

          // check if we're calling `append` function
          if (is.identifier(call.callee) && call.callee.name === append!.id.name) {
            // check if we're reusing the arguments...
            if (
              // >>> this$static.encodeBuffer
              //     ^^^^^^^^^^^
              is.memberExpression(call.arguments[0]) && is.identifier(call.arguments[0].object) &&
              call.arguments[0].object.name === node.params[0].name &&
              // >>> token
              is.identifier(call.arguments[1]) && call.arguments[1].name === node.params[1].name
            ) {
              $append = node;
            }
          }
        }
      }
    }
  });

  if (!$append)
    throw new Error("$append function nodes were not found");

  return {
    $start,
    $writeString,
    $writeInt,
    $addString,
    append,
    $append,
    $writeObject
  };
}
