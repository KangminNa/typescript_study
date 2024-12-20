import IEqualityComparer from "./IEqualityComparer.js";

class DefaultGenericComparer<TValue> implements IEqualityComparer<TValue> {
  public equals(value1: TValue, value2: TValue): boolean {
    return value1 === value2;
  }

  public getHashCode(value: TValue): number {

    // 객체로 같은 값을 비교하기 위해 json 활용 [1] === [1] = false이기 때문에 JSON.stringify()는 값음을 비교할때 많이 쓰는 패턴
    const json = JSON.stringify(value);
    return json.split("").reduce((acc, cur) => acc + cur.charCodeAt(0), 0);
  }
}

const instance = new DefaultGenericComparer();
export { instance as DefaultGenericComparer };
