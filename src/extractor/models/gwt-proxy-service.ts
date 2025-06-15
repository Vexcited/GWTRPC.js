import { GWTClass } from "./gwt-class";
import { GWTProxyServiceMethod } from "./gwt-proxy-service-method";

export class GWTProxyService {
  public methods: Array<GWTProxyServiceMethod> = [];

  constructor(
    public path: string,
    public hash: string,
    public proxy_class: GWTClass,
  ) {}
}
