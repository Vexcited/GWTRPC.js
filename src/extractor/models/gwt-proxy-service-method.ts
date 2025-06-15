export enum GWTProxyServiceMethodParameterType {
  VARIABLE_REFERENCE = "VARIABLE_REFERENCE",
  CONSTANT = "CONSTANT"
}

export class GWTProxyServiceMethodParameter {
  constructor(
    public type: GWTProxyServiceMethodParameterType,
    public value: string
  ) {}
}

export class GWTProxyServiceMethod {
  constructor(
    public name: string,
    public fqdn: string,
    public types: Array<string>,
    public parameters: Array<GWTProxyServiceMethodParameter>,
  ) {}
}
