# GWT-RPC Exporter

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
