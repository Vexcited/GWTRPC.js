import { GWTClass } from "../models/gwt-class";
import { literal_or_global_string } from "../utils/literal-or-global-string";
import { Program } from "../utils/types";
import { is, traverse } from "estree-toolkit";

export const extract_classes = (bundle: Program, globals: Record<string, string>) => {
  let RemoteServiceProxy$ServiceHelper: GWTClass | undefined;
  const proxies: Array<GWTClass> = [];

  // Look for `createForClass` call expressions.
  // >>> createForClass(packageName: string, compoundClassName: string, typeId: number): Class
  traverse(bundle, {
    CallExpression({ node }) {
      if (!node || node.arguments.length !== 3) return;

      const arg0 = node.arguments[0];
      const arg0_ok = (is.literal(arg0) && typeof arg0.value === "string") || is.identifier(arg0);

      const arg1 = node.arguments[1];
      const arg1_ok = (is.literal(arg1) && typeof arg1.value === "string") || is.identifier(arg1);

      const arg2 = node.arguments[2];
      const arg2_ok = is.literal(arg2) && typeof arg2.value === "number";

      if (!arg0_ok || !arg1_ok || !arg2_ok) return;

      const package_name = literal_or_global_string(globals, arg0);
      const compound_class_name = literal_or_global_string(globals, arg1);
      const type_id = arg2.value as number;

      if (!package_name || !compound_class_name || !type_id) return;
      const instance = new GWTClass(package_name, compound_class_name, type_id);

      switch (compound_class_name) {
        case "RemoteServiceProxy/ServiceHelper":
        case "RemoteServiceProxy$ServiceHelper":
          if (package_name.startsWith("com.google.gwt.user.client.rpc.impl"))
            RemoteServiceProxy$ServiceHelper = instance;
          break;
        default:
          if (compound_class_name.endsWith("_Proxy")) {
            proxies.push(instance);
          }
      }
    },
  });

  if (!RemoteServiceProxy$ServiceHelper || proxies.length === 0)
    throw new Error("no remote service proxy was found, are you sure this GWT app makes any RPC call?");

  return {
    RemoteServiceProxy$ServiceHelper,
    proxies
  }
}
