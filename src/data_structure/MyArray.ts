import { Predicate } from "../util/types";

export class MyArray {
  private _array: any[];

  constructor() {
    this._array = [];
  }

  public push(item: any) {
    this._array.push(item);
  }

  // TypeScript 오버로딩(Overloading) 예제입니다.
  public myFindIndex(match: Predicate): number;
  public myFindIndex(match: Predicate, startIndex: number): number;
  public myFindIndex(match: Predicate, startIndex: number, count: number): number;

  public myFindIndex(
    match: Predicate,
    startIndex: number = 0,
    count: number = this._array.length - startIndex
  ): number {
    // 1. 빈 배열 예외 처리
    if (this._array.length === 0) {
      throw new Error("배열이 비어 있습니다.");
    }

    this._array.pop()

    // 2. 시작 인덱스가 배열의 길이를 초과하는 경우 예외 처리
    if (startIndex >= this._array.length) {
      throw new Error("시작 인덱스가 배열의 범위를 초과했습니다.");
    }

    // 3. 검색 범위가 유효하지 않은 경우 예외 처리
    const endIndex = startIndex + count;
    if (count < 0 || endIndex > this._array.length) {
      throw new Error("검색 범위가 유효하지 않습니다.");
    }

    // 4. 검색 로직
    for (let index = startIndex; index < startIndex + count; index++) {
      if (match(this._array[index])) {
        return index; // 매칭된 인덱스를 반환
      }
    }

    // 5. 매칭되는 요소가 없으면 -1 반환
    return -1;
  }

  // TypeScript 오버로딩(Overloading) 예제입니다.
  public myFindLastIndex(match: Predicate): number;
  public myFindLastIndex(match: Predicate, startIndex: number): number;
  public myFindLastIndex(match: Predicate, startIndex: number, count: number): number;

  public myFindLastIndex(match: Predicate, startIndex: number = this._array.length - 1, count: number = this._array.length): number {
    // 1. 빈 배열 예외 처리
    if (this._array.length === 0) {
      throw new Error("배열이 비어 있습니다.");
    }
    this._array.indexOf

    // 2. 시작 인덱스가 배열의 길이를 초과하는 경우 예외 처리
    if (startIndex >= this._array.length) {
      throw new Error("시작 인덱스가 배열의 범위를 초과했습니다.");
    }

    // count만큼 역순으로 순회하면서 조건에 맞는 마지막 원소의 인덱스를 반환
    const endIndex = Math.max(startIndex - count + 1, 0); // 범위의 끝을 계산 (0보다 작지 않도록)
    
    // 3. 검색 범위가 유효하지 않은 경우 예외 처리
    if (count < 0 || endIndex > this._array.length) {
      throw new Error("검색 범위가 유효하지 않습니다.");
    }

    for (let i = startIndex; i >= endIndex; i--) {
        if (match(this._array[i])) {
            return i; // 조건에 맞는 원소가 발견되면 그 인덱스를 반환
        }
    }

    return -1; // 조건에 맞는 원소가 없으면 -1 반환
}



  

  [Symbol.iterator](): Iterator<any> {
    let idx = -1;
    const array = this._array;

    return {
      next() {
        idx++;
        return { value: array[idx], done: idx >= array.length };
      },
    };
  }
}