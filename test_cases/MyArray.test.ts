import { MyArray } from "../data_structure/MyArray.js";  // MyArray 클래스를 가져옵니다

describe("Logger", () => {
  // 로그 출력 테스트를 위한 케이스
  test.todo("주석을 해제해주세요");  // 주석을 해제하고 테스트 내용을 작성하세요
});

// describe("MyArray_test", () => {
//   const myArray = new MyArray();

//   // 배열에 값 추가
//   myArray.push(10);
//   myArray.push(20);
//   myArray.push(30);
//   myArray.push(10);
//   myArray.push(40);

//   // myFindLastIndex 메서드 테스트
//   it("MyArray myFindLastIndex Test - item === 10", () => {
//     const result = myArray.myFindLastIndex((item) => item === 10);
//     console.log("myFindLastIndex(10):", result);  // 반환값 출력
//     expect(result).toBe(3);  // 예상 값: 3 (10의 마지막 발생 인덱스)
//   });

//   it("MyArray myFindLastIndex Test - item === 20", () => {
//     const result = myArray.myFindLastIndex((item) => item === 20);
//     console.log("myFindLastIndex(20):", result);  // 반환값 출력
//     expect(result).toBe(1);  // 예상 값: 1 (20의 마지막 발생 인덱스)
//   });

//   it("MyArray myFindLastIndex Test - item === 30", () => {
//     const result = myArray.myFindLastIndex((item) => item === 30);
//     console.log("myFindLastIndex(30):", result);  // 반환값 출력
//     expect(result).toBe(2);  // 예상 값: 2 (30의 마지막 발생 인덱스)
//   });

//   // startIndex와 count 사용
//   it("MyArray myFindLastIndex Test - item === 10 (startIndex = 2, count = 3)", () => {
//     const result = myArray.myFindLastIndex((item) => item === 10, 2, 3);
//     console.log("myFindLastIndex(10, 2, 3):", result);  // 반환값 출력
//     expect(result).toBe(3);  // 예상 값: 3 (startIndex 2부터 3개의 범위 내에서 10을 찾을 수 있음)
//   });

//   // 범위 초과 - startIndex 초과
//   it("MyArray myFindLastIndex Test - 범위 초과 (startIndex > 배열 길이)", () => {
//     try {
//       const result = myArray.myFindLastIndex((item) => item === 10, 10);
//       console.log("myFindLastIndex(10, 10):", result);
//     } catch (error) {
//       console.error("범위 초과 테스트 실패:", error);
//       expect(error).toBe("OutOfRange: 시작 인덱스가 배열의 범위를 초과했습니다.");
//     }
//   });

//   // 범위 초과 - count가 잘못된 경우
//   it("MyArray myFindLastIndex Test - 범위 초과 (count < 0)", () => {
//     try {
//       const result = myArray.myFindLastIndex((item) => item === 20, 0, -1);
//       console.log("myFindLastIndex(20, 0, -1):", result);
//     } catch (error) {
//       console.error("범위 초과 테스트 실패:", error);
//       expect(error).toBe("OutOfRange: 검색 범위가 유효하지 않습니다.");
//     }
//   });

//   // 값이 존재하지 않는 경우
//   it("MyArray myFindLastIndex Test - item === 50", () => {
//     const result = myArray.myFindLastIndex((item) => item === 50);
//     console.log("myFindLastIndex(50):", result);  // 반환값 출력
//     expect(result).toBe(-1);  // 예상 값: -1 (50은 배열에 없으므로)
//   });

//   // 빈 배열에서 검색
//   it("MyArray myFindLastIndex Test - 빈 배열에서 검색", () => {
//     const emptyArray = new MyArray();  // 빈 배열
//     const result = emptyArray.myFindLastIndex((item) => item === 10);
//     console.log("myFindLastIndex(10) on empty array:", result);  // 반환값 출력
//     expect(result).toBe(-1);  // 예상 값: -1 (빈 배열에서는 값이 존재하지 않음)
//   });

//   // 시작 인덱스가 배열 크기보다 작은 경우
//   it("MyArray myFindLastIndex Test - startIndex가 배열 크기보다 작은 경우", () => {
//     const result = myArray.myFindLastIndex((item) => item === 40, 0, 5);
//     console.log("myFindLastIndex(40, 0, 5):", result);  // 반환값 출력
//     expect(result).toBe(4);  // 예상 값: 4 (40은 마지막 위치에 있음)
//   });

//   // 시작 인덱스가 배열 크기보다 큰 경우
//   it("MyArray myFindLastIndex Test - startIndex가 배열 크기보다 큰 경우", () => {
//     try {
//       const result = myArray.myFindLastIndex((item) => item === 10, 10);
//       console.log("myFindLastIndex(10, 10):", result);  // 반환값 출력
//     } catch (error) {
//       console.error("startIndex 초과 테스트 실패:", error);
//       expect(error).toBe("OutOfRange: 시작 인덱스가 배열의 범위를 초과했습니다.");
//     }
//   });
// });

// describe("MyArray_myFindIndex_Test", () => {
//   const myArray = new MyArray();

//   // // 배열에 값 추가
//   myArray.push(10);
//   myArray.push(20);
//   myArray.push(30);
//   myArray.push(10);
//   myArray.push(40);


//   // myFindIndex 메서드 테스트
//   it("MyArray myFindIndex Test - item === 10", () => {
//     const result = myArray.myFindIndex((item) => item === 10);
//     console.log("myFindIndex(10):", result);  // 반환값 출력
//     expect(result).toBe(0);  // 예상 값: 0 (10은 첫 번째 위치에 있음)
//   });

//   it("MyArray myFindIndex Test - item === 10 (startIndex = 1)", () => {
//     const result = myArray.myFindIndex((item) => item === 10, 1);
//     console.log("myFindIndex(10, 1):", result);  // 반환값 출력
//     expect(result).toBe(-1);  // 예상 값: -1 (startIndex 1부터 10을 찾을 수 없음)
//   });

//   it("MyArray myFindIndex Test - item === 30 (startIndex = 2, count = 1)", () => {
//     const result = myArray.myFindIndex((item) => item === 30, 2, 1);
//     console.log("myFindIndex(30, 2, 1):", result);  // 반환값 출력
//     expect(result).toBe(2);  // 예상 값: 2 (startIndex 2부터 30을 찾을 수 있음)
//   });

//   // 모든 값이 일치하는 경우
//   it("MyArray myFindIndex Test - item === 20 (startIndex = 0)", () => {
//     const result = myArray.myFindIndex((item) => item === 20, 0);
//     console.log("myFindIndex(20, 0):", result);  // 반환값 출력
//     expect(result).toBe(1);  // 예상 값: 1 (20은 두 번째 위치)
//   });

//   // 배열 끝에서 찾는 경우
//   it("MyArray myFindIndex Test - item === 30 (startIndex = 0, count = 3)", () => {
//     const result = myArray.myFindIndex((item) => item === 30, 0, 3);
//     console.log("myFindIndex(30, 0, 3):", result);  // 반환값 출력
//     expect(result).toBe(2);  // 예상 값: 2 (30은 마지막 위치)
//   });

//   // 범위 초과
//   it("MyArray myFindIndex Test - 범위 초과", () => {
//     const result = myArray.myFindIndex((item) => item === 10, 10);
//     console.log("myFindIndex(10, 10):", result);  // 반환값 출력
//     expect(result).toBe(-1);  // 예상 값: -1 (인덱스 10은 배열의 범위를 초과)
//   });

//   // 찾을 수 없는 값
//   it("MyArray myFindIndex Test - item === 40", () => {
//     const result = myArray.myFindIndex((item) => item === 40);
//     console.log("myFindIndex(40):", result);  // 반환값 출력
//     expect(result).toBe(-1);  // 예상 값: -1 (40이 없음)
//   });
// });
