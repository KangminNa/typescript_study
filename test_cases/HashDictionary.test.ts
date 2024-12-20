import { HashDictionary, KeyValuePair } from "../data_structure/HashDictionary.js";
import { StringIgnoreCaseComparer } from "../util/StringIgnoreCaseComparer.js";

describe("Logger", () => {
  test.todo("주석을 해제해주세요");
});

describe("HashDictionary_test", () => {
  const hashDictionary = new HashDictionary<string, string>(StringIgnoreCaseComparer);
  hashDictionary.add("10", "101010");
  hashDictionary.add("2", "222222");
  hashDictionary.add("30", "303030");
  hashDictionary.add("4", "444444");
  hashDictionary.add("50", "505050");

  // 예외발생. 이미 중복된 값이므로 오류가 발생한다.
  it("HashDictionary duplicate error test", () => expect(() =>hashDictionary.add("30", "808080")).toThrow());

  // 추가되지 않은 키로 검색해도 오류가 발생하지 않는다.
  it("HashDictionary tryGetValue Test", () => expect(hashDictionary.tryGetValue("80")).toEqual({ success: false, value: null }));

  it("HashDictionary toArray test", () => {
    hashDictionary.set("30", "808080"); //=> 추가가 아닌 해당 키에 대한 값을 설정하는 것이므로 오류없이 값을 변경한다.
    hashDictionary.remove("2");

    return  expect(hashDictionary.toArray()).toEqual([
      new KeyValuePair("10", "101010"),
      new KeyValuePair("30", "808080"),
      new KeyValuePair("4", "444444"),
      new KeyValuePair("50", "505050"),
    ]);

  });
   
});
