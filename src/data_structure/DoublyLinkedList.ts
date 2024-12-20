import { DefaultGenericComparer } from "../util/DefaultGenericComparer.js";
import IEqualityComparer from "../util/IEqualityComparer.js";

class LinkedNode<TValue> {
  prev: LinkedNode<TValue> | null = null;
  next: LinkedNode<TValue> | null = null;
  data: TValue;

  constructor(data: TValue);
  constructor(data: TValue, prevNode: LinkedNode<TValue>, nextNode: LinkedNode<TValue>);
  constructor(data: TValue, prevNode: LinkedNode<TValue> | null = null, nextNode: LinkedNode<TValue> | null = null) {
    this.data = data;
    this.next = nextNode;
    this.prev = prevNode;
  }
}

export class DoublyLinkedList<TValue> implements Iterable<TValue> {
  private _count: number;
  private _head: LinkedNode<TValue> | null;
  private _tail: LinkedNode<TValue> | null;
  private _comparer: IEqualityComparer<TValue>; // 내가 매치를 할건데 어떤 함수랑 매치를 할 때 대소문자 구별을 하지 않게 하고싶고, match function에서는 대소문자 구별을 해젔어야 했는데, comparer를 먼저 받아서 처리를 해준다. compare interface는 equals, getHashCode를 리턴. 동일한 키를 들어왔을 떄 

  public constructor(comparer: IEqualityComparer<TValue> | null = null) {
    this._count = 0;
    this._head = null;
    this._tail = null;
    this._comparer = comparer ?? DefaultGenericComparer;
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

  public addFirst(data: TValue): void {
    const newNode = new LinkedNode(data);
  
    if (this._head !== null) {
      // 기존 _head와 새 노드를 연결
      newNode.next = this._head;
      this._head.prev = newNode;
    } else {
      // 리스트가 비어 있는 경우 _tail도 새 노드로 설정
      this._tail = newNode;
    }
  
    // 새 노드를 _head로 설정
    this._head = newNode;
    this._count++;
  }
  
  public addLast(data: TValue): void {
    const newNode = new LinkedNode(data);
  
    if (this._tail !== null) {
      // 기존 _tail과 새 노드를 연결
      this._tail.next = newNode;
      newNode.prev = this._tail;
    } else {
      // 리스트가 비어 있는 경우 _head도 새 노드로 설정
      this._head = newNode;
    }
  
    // 새 노드를 _tail로 설정
    this._tail = newNode;
    this._count++;
  }
  

  public removeFirst(): TValue | null {
    let result: TValue | null = null;

    if (this._head !== null) {
      result = this._head.data;
      this.remove(this._head);
    }

    return result;
  }

  public removeLast(): TValue | null {
    let result: TValue | null = null;

    if (this._tail !== null) {
      //TODO: tail이 가지고 있는 값을 result에 설정한 후 tail 노드를 삭제.
      result = this._tail.data
      this.remove(this._tail)
    }

    return result;
  }

  public remove(value: TValue | LinkedNode<TValue>): void {
    // 만약 value가 LinkedNode 타입이면 removeNode를 호출하여 해당 노드를 삭제
    if (value instanceof LinkedNode) {
      this.removeNode(value);
    } else {
      // value가 TValue 타입이면 removeData를 호출하여 해당 데이터를 가진 노드를 찾아 삭제
      this.removeData(value);
    }
  }

  private removeData(data: TValue): void {
    let currentNode = this._head;

    // head부터 시작하여 데이터를 찾기
    while (currentNode !== null) {
      // 데이터가 일치하는 노드를 찾으면 removeNode를 호출
      if (this._comparer.equals(currentNode.data, data)) {
        this.removeNode(currentNode);
        return; // 첫 번째 일치하는 노드만 삭제하고 종료
      }

      currentNode = currentNode.next; // 다음 노드로 이동
    }

    // 만약 데이터를 찾을 수 없으면 오류를 발생시킴
    throw new Error("Data not found in the list.");
  }

  private removeNode(node: LinkedNode<TValue>): void {
    // 삭제하려는 노드가 head인 경우
    if (node === this._head) {
      this._head = node.next; // head를 삭제하면 head를 다음 노드로 갱신
      if (this._head !== null) {
        this._head.prev = null; // 새로운 head가 있으면 그 노드의 prev를 null로 설정
      }
    } else {
      // 삭제하려는 노드가 중간에 있을 경우
      if (node.prev) {
        node.prev.next = node.next; // 이전 노드의 next를 삭제된 노드의 next로 설정
      }
    }

    // 삭제하려는 노드가 tail인 경우
    if (node === this._tail) {
      this._tail = node.prev; // tail을 삭제하면 tail을 이전 노드로 갱신
      if (this._tail !== null) {
        this._tail.next = null; // 새로운 tail이 있으면 그 노드의 next를 null로 설정
      }
    } else {
      // 삭제하려는 노드가 중간에 있을 경우
      if (node.next) {
        node.next.prev = node.prev; // 다음 노드의 prev를 삭제된 노드의 prev로 설정
      }
    }

    // 삭제된 노드의 연결을 끊고, 리스트에서 제거
    node.prev = null;
    node.next = null;

    this._count--; // 노드가 삭제되었으므로 리스트의 길이 감소
  }


  // 앞에서부터 검색
  public find(data: TValue): LinkedNode<TValue> | null {
    let node = this._head; // 처음 노드를 시작점으로 설정
    while (node !== null) { // 노드가 null이 아니면 계속 반복
      if (this._comparer.equals(node.data, data)) {
        return node; // LinkedNode 객체 그대로 반환
      }
      node = node.next; // 다음 노드로 이동
    }
    return null; // 찾지 못한 경우 null 반환
  }


  
  


  //뒤에서 부터 검색
  public findLast(data: TValue): LinkedNode<TValue> | null {
    for (let node = this._tail; node !== null; node = node.prev) {
      // TODO: comparer로 비교하여 해당되는 노드를 리턴
      if (this._comparer.equals(node.data, data)) {
        return node;
      }
    }

    return null;
  }


  // 
  public contains(data: TValue): boolean {
    // head부터 시작하여 리스트를 순차적으로 탐색
    for (let node = this._head; node !== null; node = node.next) {
      // comparer를 사용하여 node.data와 data를 비교
      if (this._comparer.equals(node.data, data)) {
        return true; // 일치하는 값을 찾으면 true 반환
      }
    }
  
    // 끝까지 찾지 못한 경우 false 반환
    return false;
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

  public toArray(): TValue[] {
    //TODO: 연결리스트를 순회하며 배열에 값을 복사한다.
    const arr: TValue[] = [];
    let current = this._head;

    while (current !== null) {
      arr.push(current.data);
      current = current.next;
    }
    return arr;
  }
  
  [Symbol.iterator](): Iterator<TValue> {
    let currentNode = this._head; // head부터 시작
  
    return {
      next(): IteratorResult<TValue> {
        if (currentNode !== null) {
          const value = currentNode.data; // 현재 노드의 데이터 반환
          currentNode = currentNode.next; // 다음 노드로 이동
          return { value, done: false }; // 데이터가 존재하면 false 반환
        } else {
          return { value: undefined as unknown as TValue, done: true }; // 끝에 도달하면 done: true
        }
      }
    };
  }  

  //TODO: 나머지 메소드
}
