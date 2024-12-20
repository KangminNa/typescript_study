import { SinglyLinkedList } from "../data_structure/SinglyLinkedList.js";
describe("Logger", () => {
  // 로그 출력 테스트를 위한 케이스
  test.todo("주석을 해제해주세요");  // 주석을 해제하고 테스트 내용을 작성하세요
});

// describe("SinglyLinkedList findIndex Test", () => {
//   let linkedList: SinglyLinkedList<number>;

//   beforeEach(() => {
//     // 각 테스트마다 새 리스트 생성
//     linkedList = new SinglyLinkedList<number>();
//   });

//   it("SinglyLinkedList add Test & clear", () => {
//     // 요소 추가 및 제거를 통해 리스트 구성
//     linkedList.addFirst(40);  // [40]
//     linkedList.addLast(10);   // [40, 10]
//     linkedList.addLast(20);   // [40, 10, 20]
//     linkedList.clear();       // []
//     linkedList.addLast(30);   // [30]
//     linkedList.removeFirst(); // []
//     linkedList.addFirst(10);  // [10]

//     // 최종 리스트 상태 검증
//     expect(linkedList.toArray()).toEqual([10]);
//   });

//   it("findIndex Test: 값이 존재할 때", () => {
//     linkedList.addLast(10);   // [10]
//     linkedList.addLast(20);   // [10, 20]
//     linkedList.addLast(30);   // [10, 20, 30]

//     // findIndex로 특정 값의 인덱스를 확인
//     expect(linkedList.findIndex((value) => value === 20)).toBe(1);
//   });

//   it("findIndex Test: 값이 존재하지 않을 때", () => {
//     linkedList.addLast(10);   // [10]
//     linkedList.addLast(20);   // [10, 20]

//     // findIndex로 없는 값의 인덱스를 찾으려 할 때
//     expect(linkedList.findIndex((value) => value === 40)).toBe(-1);
//   });

//   it("findIndex Test: 빈 리스트에서 검색", () => {
//     // 비어 있는 리스트에서 findIndex 호출
//     expect(linkedList.findIndex((value) => value === 10)).toBe(-1);
//   });

//   it("findIndex Test: 첫 번째 값이 조건을 만족할 때", () => {
//     linkedList.addLast(10);   // [10]
//     linkedList.addLast(20);   // [10, 20]
//     linkedList.addLast(30);   // [10, 20, 30]

//     // 첫 번째 값이 조건을 만족할 때
//     expect(linkedList.findIndex((value) => value === 10)).toBe(0);
//   });
// });