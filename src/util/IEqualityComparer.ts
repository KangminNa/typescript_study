export default interface IEqualityComparer<T> {
  equals(value1: T, value2: T): boolean;
  getHashCode(value: T): number;
}
