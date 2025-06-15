import fs from "node:fs/promises";
import { read_bundle } from "../extractor/read-bundle";
import { extract_globals } from "../extractor/core/extract-globals";
import { extract_function_nodes } from "../extractor/core/extract-function-nodes";
import { extract_classes } from "../extractor/core/extract-classes";
import { handle_classes } from "../extractor/core/handle-classes";
import { extract_append_methods } from "../extractor/core/extract-append-methods";

// TODO: ask the user to provide their own URL in the future.
const BASE_MODULE_URL = "https://example.com/yourappname/";

// 0. retrieve the file from argv.
const file = process.argv[2];
if (!file) throw new Error("file argument not given");

// 1. read the given file to get file content.
const content = await fs.readFile(file, "utf8");

// 2. extract the bundle from the content.
const bundle = read_bundle(file, content);

// 3. extract all the string globals from the main scope.
const globals = extract_globals(bundle);

const services = extract_append_methods(
  bundle,
  extract_function_nodes(bundle),
  handle_classes(bundle, extract_classes(bundle, globals)),
  globals
);

console.dir(services, { depth: Infinity });

const GWT_VERSION = globals["$gwt_version"];
const STRONG_NAME = globals["$strongName"];

console.log(
  {
    version: GWT_VERSION,
    headers: {
      // TODO: we can intercept the function `$setHeader` and capture this content-type value.
      "Content-Type": "text/x-gwt-rpc; charset=utf-8",
      "X-GWT-Permutation": STRONG_NAME,
      "X-GWT-Module-Base": BASE_MODULE_URL,
    }
  },
);
