export class GWTClass {
  public package_name: string;

  constructor(
    package_name: string,
    public class_name: string,
    public type_id: number,
  ) {
    if (package_name.endsWith(".")) {
      // remove the trailing dot.
      package_name = package_name.substring(0, package_name.length - 1);
    }

    this.package_name = package_name;
  }

  get fqdn (): string {
    return this.package_name + "." + this.class_name;
  }
}
