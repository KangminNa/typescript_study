import { DoublyLinkedList } from "./DoublyLinkedList.js";

export class Stack<TValue> implements Iterable<TValue> {
  private _linkedList: DoublyLinkedList<TValue>;

  public constructor() {
    this._linkedList = new DoublyLinkedList();
  }

  public get count(): number {
    return this._linkedList.count;
  }

  // 데이터를 꺼내지 않고 가장 마지막에 들어간 값을 반환
  public peek(): TValue {
    if (this._linkedList.last === null) {
      throw new Error("Stack is empty");
    }
    return this._linkedList.last.data;
  }

  // 스택에 값을 추가
  public push(item: TValue): void {
    this._linkedList.addLast(item);
  }

  // 스택에서 값을 제거하고 반환
  public pop(): TValue {
    const removedItem = this._linkedList.removeLast();
    if (removedItem === null) {
      throw new Error("Stack is empty");
    }
    return removedItem;
  }

  // 스택을 배열로 변환
  public toArray(): TValue[] {
    return this._linkedList.toArray();
  }

  // 스택을 비움
  public clear(): void {
    this._linkedList.clear();
  }

  // 반복자(iterator) 구현
  [Symbol.iterator](): Iterator<TValue> {
    return this._linkedList[Symbol.iterator]();
  }
}
