import { Queue } from "../data_structure/Queue.js";

describe("Logger", () => {
  // 로그 출력 테스트를 위한 케이스
  test.todo("주석을 해제해주세요");  // 주석을 해제하고 테스트 내용을 작성하세요
});

// describe("Queue Tests", () => {
//   let queue: Queue<number>;

//   // 각 테스트 전에 새로운 Queue 인스턴스 생성
//   beforeEach(() => {
//     queue = new Queue<number>();
//   });

//   it("should enqueue elements correctly", () => {
//     queue.enqueue(10);
//     queue.enqueue(20);
//     queue.enqueue(30);
//     expect(queue.toArray()).toEqual([10, 20, 30]); // 큐에 추가된 요소 확인
//   });

//   it("should dequeue elements in FIFO order", () => {
//     queue.enqueue(10);
//     queue.enqueue(20);
//     queue.enqueue(30);
//     expect(queue.dequeue()).toBe(10); // 가장 먼저 추가된 10이 제거
//     expect(queue.toArray()).toEqual([20, 30]); // 나머지 요소 확인
//     expect(queue.dequeue()).toBe(20); // 다음 요소 제거
//     expect(queue.toArray()).toEqual([30]);
//     expect(queue.dequeue()).toBe(30); // 마지막 요소 제거
//     expect(queue.count).toBe(0); // 큐가 비어 있음
//   });

//   it("should peek the first element without removing it", () => {
//     queue.enqueue(10);
//     queue.enqueue(20);
//     queue.enqueue(30);
//     expect(queue.peek()).toBe(10); // 첫 번째 요소 확인
//     expect(queue.toArray()).toEqual([10, 20, 30]); // 요소가 제거되지 않음
//   });

//   it("should clear all elements", () => {
//     queue.enqueue(10);
//     queue.enqueue(20);
//     queue.enqueue(30);
//     queue.clear();
//     expect(queue.count).toBe(0); // 큐가 비어 있음
//     expect(queue.toArray()).toEqual([]); // 요소가 없음
//   });

//   it("should throw an error when dequeuing from an empty queue", () => {
//     expect(() => queue.dequeue()).toThrow("Queue is empty"); // 비어 있는 큐에서 제거 시 예외 발생
//   });

//   it("should throw an error when peeking into an empty queue", () => {
//     expect(() => queue.peek()).toThrow("Queue is empty"); // 비어 있는 큐에서 조회 시 예외 발생
//   });

//   it("should be iterable", () => {
//     queue.enqueue(10);
//     queue.enqueue(20);
//     queue.enqueue(30);

//     const result: number[] = [];
//     for (const value of queue) {
//       result.push(value);
//     }
//     expect(result).toEqual([10, 20, 30]); // 반복자를 통해 모든 요소를 순회
//   });
// });
