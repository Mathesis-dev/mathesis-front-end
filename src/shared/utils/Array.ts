export function replaceItemAtIndex<T>(
  arr: Array<T>,
  index: number,
  newValue: T
): Array<T> {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

export function removeItemAtIndex<T>(arr: Array<T>, index: number): Array<T> {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

export function isArray(value: any): boolean {
  return value && Array.isArray(value);
}
