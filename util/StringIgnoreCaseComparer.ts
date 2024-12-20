import IEqualityComparer from "./IEqualityComparer.js";

class StringIgnoreCaseComparer implements IEqualityComparer<string> {
  public equals(value1: string, value2: string): boolean {
    return value1.toLowerCase() === value2.toLowerCase();
  }

  public getHashCode(value: string): number {
    return value
      .toLowerCase()
      .split("")
      .reduce((acc, cur) => acc + cur.charCodeAt(0), 0);
  }
}

const instance = new StringIgnoreCaseComparer();
export { instance as StringIgnoreCaseComparer };
