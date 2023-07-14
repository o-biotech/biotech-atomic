export function factory<T extends { new (...args: any[]): {} }>(
  type: T,
  data: InstanceType<T>,
): InstanceType<T> {
  return Object.assign(new type(), data);
}
