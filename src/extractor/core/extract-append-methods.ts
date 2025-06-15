import { is, traverse, types } from "estree-toolkit";
import { GWTProxyService } from "../models/gwt-proxy-service";
import { literal_or_global_string } from "../utils/literal-or-global-string";
import { Program } from "../utils/types";
import { extract_function_nodes } from "./extract-function-nodes";
import { handle_classes } from "./handle-classes"
import { GWTProxyServiceMethod, GWTProxyServiceMethodParameter, GWTProxyServiceMethodParameterType } from "../models/gwt-proxy-service-method";

export const extract_append_methods = (bundle: Program, functions: ReturnType<typeof extract_function_nodes>, { RemoteServiceProxy$ServiceHelper, services }: ReturnType<typeof handle_classes>, globals: Record<string, string>): Array<GWTProxyService> => {
  traverse(bundle, {
    NewExpression(path) {
      const node = path.node;
      if (!node || node.callee.type !== "Identifier") return;
      if (node.callee.name !== RemoteServiceProxy$ServiceHelper!.id.name)
        return;

      // >>> new RemoteServiceProxy$ServiceHelper(this$static, proxyServiceName: string, methodName: string);
      if (node.arguments.length === 3) {
        let proxyServiceName: string | undefined;
        let name: string | undefined;

        for (let i = 1; i < 3; i++) {
          const arg = node.arguments[i] as types.Expression;
          const val = literal_or_global_string(globals, arg);

          if (i === 1) proxyServiceName = val;
          else if (i === 2) name = val;
        }

        const proxyService = services.find(
          (s) => s.proxy_class.class_name === proxyServiceName,
        );

        if (!name) return;
        if (!proxyService) {
          console.warn(
            `[${proxyServiceName}]: skipping method ${name}, proxy class was not found..`,
          );
          return;
        }

        // Let's read the `try/catch` right below the `new RemoteServiceProxy$ServiceHelper`.
        const trycatch = path.parentPath?.parentPath?.getNextSibling()?.node;
        if (!trycatch || !is.tryStatement(trycatch)) return;

        const function_args = path.getFunctionParent()!.node!.params;
        let method_args_length: number | undefined;

        // we have methodArgsLength * $addString calls that are in the string table
        // then after, we have methodArgsLength * (whatever) calls that are in the values.
        let visited_args_for_types = 0;

        let class_fqdn: string | undefined;
        const method_types: Array<string> = [];
        const method_parameters: Array<GWTProxyServiceMethodParameter> = [];

        traverse(trycatch, {
          CallExpression({ node }) {
            if (!node || !is.identifier(node.callee)) return;

            // >>> $start(helper, remoteServiceInterfaceName: string, paramCount: number)
            if (node.callee.name === functions.$start.id.name) {
              const service_interface_name = node.arguments[1];
              class_fqdn = literal_or_global_string(globals, service_interface_name as types.Expression);

              const param_count = node.arguments[2];
              if (!is.literal(param_count)) {
                throw new Error(
                  `method's parameters count type is wrong: got ${param_count.type}`,
                );
              }

              method_args_length = param_count.value as number;
              return;
            }

            const add_to_method_parameters = (v: types.Expression): void => {
              if (is.identifier(v)) {
                if ( // is a reference from function's args
                  function_args
                    .filter((arg) => is.identifier(arg))
                    .map((arg) => arg.name)
                    .includes(v.name)
                ) {
                  method_parameters.push(
                    new GWTProxyServiceMethodParameter(
                      GWTProxyServiceMethodParameterType.VARIABLE_REFERENCE,
                      v.name
                    )
                  );
                }
                else { // is a global string reference => constant
                  method_parameters.push(
                    new GWTProxyServiceMethodParameter(
                      GWTProxyServiceMethodParameterType.CONSTANT,
                      globals[v.name]
                    )
                  );
                }
              }
              else if (is.literal(v) && typeof v.value === "string") {
                method_parameters.push(
                  new GWTProxyServiceMethodParameter(
                    GWTProxyServiceMethodParameterType.CONSTANT,
                    v.value
                  )
                );
              }
            }

            // >>> $addString(streamWriter, token)
            if (node.callee.name === functions.$addString.id.name) {
              const token = <types.Expression>node.arguments[1];

              if (visited_args_for_types < method_args_length!) {
                method_types.push(literal_or_global_string(globals, token));
                visited_args_for_types++;
              }
              else {
                add_to_method_parameters(token);
              }

              return;
            }

            // >>> $writeObject(streamWriter, instance)
            if (functions.$writeObject && node.callee.name === functions.$writeObject.id.name) {
              const instance = <types.Expression>node.arguments[1];
              add_to_method_parameters(instance);
              return;
            }

            // PRE 2.6:
            // >>> $append(streamWriter, token)
            //
            // POST 2.6:
            // >>> append(streamWriter.encodeBuffer, token)
            if (node.callee.name === functions.append.id.name || node.callee.name === functions.$append.id.name) {
              const token = <types.Expression>node.arguments[1];
              add_to_method_parameters(token);
              return;
            }
          }
        });

        const method = new GWTProxyServiceMethod(
          name,
          class_fqdn!,
          method_types,
          method_parameters,
        );

        proxyService.methods.push(method);
      }
    }
  });

  return services;
}
