import { DoublyLinkedList } from "../data_structure/DoublyLinkedList.js";
import { StringIgnoreCaseComparer } from "../util/StringIgnoreCaseComparer.js";

describe("Logger", () => {
  test.todo("주석을 해제해주세요");
});

// describe("DoublyLinkedList_test", () => {
//   const linkedList = new DoublyLinkedList<number>();
//   linkedList.addFirst(10);
//   linkedList.addFirst(20);
//   linkedList.addFirst(30);
//   linkedList.addFirst(40);
//   linkedList.addFirst(50);

//   it("DoublyLinkedList add Test", () => expect(linkedList.toArray()).toEqual([10, 20, 30, 40, 50]));
// });

// describe("DoublyLinkedList_comparer_test", () => {
//   const linkedList = new DoublyLinkedList<string>(StringIgnoreCaseComparer);
//   linkedList.addLast("abc");
//   linkedList.addLast("def");
//   linkedList.addLast("ghi");

//   linkedList.remove("DEF");

//   it("DoublyLinkedList add Test", () => expect(linkedList.toArray()).toEqual(["abc", "ghi"]));
// });


// describe("DoublyLinkedList_remove_test", () => {
//   const linkedList = new DoublyLinkedList<number>();
//   linkedList.addLast(10);
//   linkedList.addLast(20);
//   linkedList.addLast(30);
//   linkedList.addLast(40);

//   it("DoublyLinkedList removeFirst Test", () => {
//     linkedList.removeFirst();
//     expect(linkedList.toArray()).toEqual([20, 30, 40]);
//   });

//   it("DoublyLinkedList removeLast Test", () => {
//     linkedList.removeLast();
//     expect(linkedList.toArray()).toEqual([20, 30]);
//   });
// });

// describe("DoublyLinkedList_toArray_test", () => {
//   const linkedList = new DoublyLinkedList<number>();
//   linkedList.addLast(10);
//   linkedList.addLast(20);
//   linkedList.addLast(30);

//   it("DoublyLinkedList toArray Test", () => {
//     expect(linkedList.toArray()).toEqual([10, 20, 30]);
//   });
// });

// describe("DoublyLinkedList_clear_test", () => {
//   const linkedList = new DoublyLinkedList<number>();
//   linkedList.addLast(10);
//   linkedList.addLast(20);
//   linkedList.addLast(30);

//   it("DoublyLinkedList clear Test", () => {
//     linkedList.clear();
//     expect(linkedList.toArray()).toEqual([]);
//   });
// });

// describe("DoublyLinkedList_iterator_test", () => {
//   const linkedList = new DoublyLinkedList<number>();
//   linkedList.addLast(10);
//   linkedList.addLast(20);
//   linkedList.addLast(30);

//   it("DoublyLinkedList iterator Test", () => {
//     const result = [];
//     for (const value of linkedList) {
//       result.push(value);
//     }
//     expect(result).toEqual([10, 20, 30]);
//   });
// });









