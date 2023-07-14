// deno-lint-ignore no-explicit-any
export function factory<T extends { new (...args: any[]): any }>(
  type: T,
  data?: InstanceType<T>,
): InstanceType<T> {
  return Object.assign(new type(), data || {} as InstanceType<T>);
}
