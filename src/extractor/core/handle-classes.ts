import { is, traverse, types } from "estree-toolkit";
import { GWTProxyService } from "../models/gwt-proxy-service";
import { Program } from "../utils/types";
import { extract_classes } from "./extract-classes";

export const handle_classes = (
  bundle: Program,
  extraction: ReturnType<typeof extract_classes>
) => {
  let RemoteServiceProxy$ServiceHelper: types.FunctionDeclaration | undefined;

  const proxy_type_ids = extraction.proxies.map((proxy) => proxy.type_id);
  const class_type_ids = extraction.classes.map((clazz) => clazz.type_id);

  const services: Array<GWTProxyService> = [];

  traverse(bundle, {
    $: { scope: true },

    // Here, we'll look for `defineClass` calls, signature varies since
    // arguments are dynamic, but we're looking for this one in particular.
    // >>> defineClass(proxyClassTypeId: number, superTypeIdOrPrototype: number, castableTypeMap: unknown, proxyClass: () => void): void
    CallExpression({ node, scope }) {
      if (!node || !scope || node.arguments.length !== 4) return;

      // check if we're calling with a known type id.
      const arg0 = node.arguments[0];
      const arg0_ok =
        is.literal(arg0) &&
        typeof arg0.value === "number" &&
        (proxy_type_ids.includes(arg0.value) ||
          class_type_ids.includes(arg0.value) ||
          arg0.value === extraction.RemoteServiceProxy$ServiceHelper.type_id);

      if (!arg0_ok) return;

      // get type id from arg since known.
      const type_id = arg0.value as number;

      const arg3 = node.arguments[3];
      if (!is.identifier(arg3)) return;

      // get proxy function declaration binding
      const binding = scope.getBinding(arg3.name);
      if (!binding || !is.functionDeclaration(binding.path.node)) return;

      // from there, we can intercept the `RemoteServiceProxy$ServiceHelper` node
      if (type_id === extraction.RemoteServiceProxy$ServiceHelper.type_id) {
        RemoteServiceProxy$ServiceHelper = binding.path.node;
        return;
      }

      // get GWT class from known classes.
      const gwt_class = extraction.proxies.find(
        (proxy) => proxy.type_id === type_id
      );

      if (gwt_class) {
        // last call contains the path and hash of the proxy service.
        // >>> RemoteServiceProxy.call(this, getModuleBaseURL(), 'path', 'hash', SERIALIZER);
        const statement = binding.path.node.body.body.at(-1);
        if (
          !is.expressionStatement(statement) ||
          !is.callExpression(statement.expression)
        )
          return;

        const call = statement.expression;
        const call_arg2 = call.arguments[2];
        const call_arg3 = call.arguments[3];

        let path: string | undefined;

        if (is.literal(call_arg2) && typeof call_arg2.value === "string") {
          path = call_arg2.value;
        }

        let hash: string | undefined;

        if (is.literal(call_arg3) && typeof call_arg3.value === "string") {
          hash = call_arg3.value;
        }

        if (!path || !hash) {
          console.warn(
            `[${gwt_class.class_name}]: 'path' is null! skipping...`
          );
          return;
        }

        const service = new GWTProxyService(path, hash, gwt_class);
        services.push(service);
      } else {
        const clazz = extraction.classes.find(
          (clazz) => clazz.type_id === type_id
        );

        if (!clazz) return;
        const fn_body = binding.path.node.body.body;
        const params = fn_body
          .filter(
            (stmt) =>
              is.expressionStatement(stmt) &&
              is.assignmentExpression(stmt.expression) &&
              is.memberExpression(stmt.expression.left) &&
              is.thisExpression(stmt.expression.left.object) &&
              is.identifier(stmt.expression.right)
          )
          .map(
            (stmt) =>
              (<types.Identifier>(
                (<types.AssignmentExpression>(
                  (<types.ExpressionStatement>stmt).expression
                )).right
              )).name
          );

        if (params.length === 0) return;
        // TODO: maybe be able to get parameters of classes when
        //       using custom types on services' methods!
        // console.log(clazz, params);
      }
    },
  });

  if (!RemoteServiceProxy$ServiceHelper)
    throw new Error(
      "no remote service proxy was found, are you sure this GWT app makes any RPC call?"
    );

  return {
    RemoteServiceProxy$ServiceHelper,
    services,
  };
};
