# `gwtrpc2code`

> Work in progress, please come back later!

A simple tool that extracts information from GWT-RPC applications, such as the GWT version, globals, internal functions, and methods with their types and parameters and will generate code that can be used to call those methods.

The goal is to provide a way to understand and interact with GWT-RPC applications without needing to reverse engineer the code manually.

## Roadmap

- [x] Extract GWT version with module strong name
- [x] Extract globals
- [x] Extract internal functions and map to their real names, even when obfuscated
- [x] Extract `_Proxy` and helper classes
- [ ] Extract methods and their types with parameters
  - [x] Find where methods are created
  - [x] Extract their types
  - [x] Extract their parameters (whether is a constant or a function argument)
  - [x] Support `String`, `Integer`, `Boolean`, `int`, `boolean`
  - [ ] Support generic types like `List<String>`, `Map<String, Integer>`, etc.
  - [ ] Support custom types (with structure extraction like `MyType { String name; Integer age; }`)

## Supported Versions

- [x] 2.5.1
- [x] 2.10.0

A few versions were tested but I try to keep the code compatible as much as possible

## Usage

Since it's a work in progress, there's a small CLI that can run a debug version of a GWT app. It should log the extracted information to the console.

```bash
bun run ./src/cli/debug.ts ./tests/local.js
```

## References

- [GWT-RPC Protocol](https://docs.google.com/document/d/1eG0YocsYYbNAtivkLtcaiEE5IOF5u4LUol8-LL0TIKU/edit?usp=sharing)
