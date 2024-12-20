import { DoublyLinkedList } from "./DoublyLinkedList.js";

export class Queue<TValue> implements Iterable<TValue> {
  private _linkedList: DoublyLinkedList<TValue>;

  public constructor() {
    this._linkedList = new DoublyLinkedList();
  }

  // 큐의 크기를 반환
  public get count(): number {
    return this._linkedList.count;
  }

  // 큐에 데이터를 추가
  public enqueue(item: TValue): void {
    this._linkedList.addLast(item);
  }

  // 큐에서 데이터를 제거하고 반환
  public dequeue(): TValue {
    const removedItem = this._linkedList.removeFirst(); // FIFO이므로 첫 번째 데이터 제거
    if (removedItem === null) {
      throw new Error("Queue is empty"); // 큐가 비어 있으면 예외 발생
    }
    return removedItem;
  }

  // 큐의 첫 번째 데이터를 반환 (제거하지 않음)
  public peek(): TValue {
    if (this._linkedList.first === null) {
      throw new Error("Queue is empty"); // 큐가 비어 있으면 예외 발생
    }
    return this._linkedList.first.data;
  }

  // 큐를 배열로 변환
  public toArray(): TValue[] {
    return this._linkedList.toArray();
  }

  // 큐를 비움
  public clear(): void {
    this._linkedList.clear();
  }

  // 반복자(iterator) 구현
  [Symbol.iterator](): Iterator<TValue> {
    return this._linkedList[Symbol.iterator]();
  }
}
