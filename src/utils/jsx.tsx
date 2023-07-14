export function factory<T extends { new (...args: object[]): {} }>(
  type: T,
  data?: InstanceType<T>,
): InstanceType<T> {
  return Object.assign(new type(), data || {} as InstanceType<T>);
}
