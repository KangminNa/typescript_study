import { Predicate } from "../util/types";

class LinkedNode<TValue> {
  next: LinkedNode<TValue> | null = null;
  data: TValue;

  constructor(data: TValue);
  constructor(data: TValue, nextNode: LinkedNode<TValue>);
  constructor(data: TValue, nextNode: LinkedNode<TValue> | null = null) {
    this.data = data;
    this.next = nextNode;
  }
}

export class SinglyLinkedList<TValue> implements Iterable<TValue> {
  private _count: number;
  private _head: LinkedNode<TValue> | null;
  private _tail: LinkedNode<TValue> | null;

  public constructor() {
    this._count = 0;
    this._head = null;
    this._tail = null;
  }

  public get count(): number {
    return this._count;
  }

  public get first(): LinkedNode<TValue> | null {
    return this._head;
  }

  public get last(): LinkedNode<TValue> | null {
    return this._tail;
  }

  // 첫 번째 노드에 데이터를 추가
  public addFirst(data: TValue): void {
    const newNode = new LinkedNode<TValue>(data);

    if (this._tail === null) {
      // 리스트가 비어 있으면 head와 tail을 동일한 노드로 설정
      // this._head 코드 불필요
      this._tail = newNode;
    } else {
      // 새 노드를 리스트 앞에 추가
      newNode.next = this._head;
      this._head = newNode;
    }

    this._count++;
  }

  // 마지막 노드에 데이터를 추가
  public addLast(data: TValue): void {
    const newNode = new LinkedNode<TValue>(data);

    if (this._tail !== null) {
      // 기존 tail의 next를 새 노드로 설정하고 tail을 새 노드로 변경
      this._tail.next = newNode;
      this._tail = newNode;
    } else {
      // 리스트가 비어 있으면 head와 tail을 동일한 노드로 설정
      this._head = this._tail = newNode;
    }

    this._count++;
  }

  // 첫 번째 노드 제거
  public removeFirst(): TValue | null {
    let result: TValue | null = null;

    if (this._head !== null) {
      result = this._head.data;  // 삭제할 노드의 값을 저장

      // HEAD를 다음 노드를 가리키게 설정
      this._head = this._head.next;

      // 만약 HEAD가 null이면, TAIL도 null로 설정
      if (this._head === null) {
        this._tail = null;
      }
      
      this._count--;
    }

    return result;
  }

  // 조건에 맞는 노드의 인덱스를 반환
  public findIndex(match: Predicate<TValue>): number {
    let current = this._head;
    let index = 0;

    while (current !== null) {
      if (match(current.data)) {
        return index;  // 조건에 맞는 값이 발견되면 그 인덱스를 반환
      }
      current = current.next;
      index++;
    }

    return -1;
  }

  // 리스트의 모든 데이터를 비우고, count를 0으로 설정
  public clear(): void {
    while (this._head !== null) {
      const nextNode = this._head.next; // 현재 노드의 다음 노드 참조 저장
      this._head.next = null;          // 현재 노드의 next 참조 해제
      this._head = nextNode;           // 다음 노드를 현재 노드로 설정
    }

    // 모든 노드를 순회한 후, tail도 null로 설정
    this._tail = null;

    // 리스트의 크기를 0으로 초기화
    this._count = 0;
  }



  // 리스트를 배열로 변환
  public toArray(): TValue[] {
    const arr: TValue[] = [];
    let current = this._head;

    while (current !== null) {
      arr.push(current.data);
      current = current.next;
    }

    return arr;
  }

  // 연결 리스트를 순차적으로 순회하는 이터레이터 구현
  [Symbol.iterator](): Iterator<TValue> {
    let current = this._head;

    return {
      next: (): IteratorResult<TValue> => {
        if (current === null) {
          return { value: undefined as unknown as TValue, done: true };
        } else {
          const value = current.data;
          current = current.next;
          return { value, done: false };
        }
      }
    };
  }
}
