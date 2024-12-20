import { DoublyLinkedList } from "./DoublyLinkedList.js";
export class Queue {
    _linkedList;
    constructor() {
        this._linkedList = new DoublyLinkedList();
    }
    // 큐의 크기를 반환
    get count() {
        return this._linkedList.count;
    }
    // 큐에 데이터를 추가
    enqueue(item) {
        this._linkedList.addLast(item);
    }
    // 큐에서 데이터를 제거하고 반환
    dequeue() {
        const removedItem = this._linkedList.removeFirst(); // FIFO이므로 첫 번째 데이터 제거
        if (removedItem === null) {
            throw new Error("Queue is empty"); // 큐가 비어 있으면 예외 발생
        }
        return removedItem;
    }
    // 큐의 첫 번째 데이터를 반환 (제거하지 않음)
    peek() {
        if (this._linkedList.first === null) {
            throw new Error("Queue is empty"); // 큐가 비어 있으면 예외 발생
        }
        return this._linkedList.first.data;
    }
    // 큐를 배열로 변환
    toArray() {
        return this._linkedList.toArray();
    }
    // 큐를 비움
    clear() {
        this._linkedList.clear();
    }
    // 반복자(iterator) 구현
    [Symbol.iterator]() {
        return this._linkedList[Symbol.iterator]();
    }
}
//# sourceMappingURL=Queue.js.map