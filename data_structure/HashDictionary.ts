import { DefaultGenericComparer } from "../util/DefaultGenericComparer.js";
import IEqualityComparer from "../util/IEqualityComparer.js";
import { DoublyLinkedList } from "./DoublyLinkedList.js";


// KeyValuePair: 키와 값의 쌍을 저장하는 클래스
export class KeyValuePair<TKey, TValue> {
  key: TKey; // 키
  value: TValue; // 값

  constructor(key: TKey, value: TValue) {
    this.key = key; // 키 초기화
    this.value = value; // 값 초기화
  }
}

// HashDictionary: 해시 테이블 기반의 딕셔너리 구현
export class HashDictionary<TKey, TValue> implements Iterable<KeyValuePair<TKey, TValue>> {
  private _bucket: DoublyLinkedList<KeyValuePair<TKey, TValue>>[]; // 버킷 배열 (충돌 해결을 위해 연결 리스트 사용)
  private _keyList: TKey[]; // 삽입 순서를 추적하기 위한 키 배열
  private _comparer: IEqualityComparer<TKey>; // 키 비교기
  private _bucketSize: number; // 현재 버킷 크기

  // 생성자: 초기화 수행
  public constructor(comparer: IEqualityComparer<TKey> | null = null) {
    this._bucket = []; // 비어 있는 버킷 배열
    this._keyList = []; // 비어 있는 키 배열
    this._comparer = comparer ?? DefaultGenericComparer; // 비교기 초기화 (기본 비교기 사용)
    this._bucketSize = 3; // 초기 버킷 크기
  }

  // count: 저장된 키-값 쌍의 개수를 반환
  public get count(): number {
    return this._keyList.length;
  }

  // keys: 키 배열을 반복자로 반환
  public get keys(): Iterator<TKey> {
    return this._keyList[Symbol.iterator](); // 키 배열의 Symbol.iterator 반환
  }

  // tryGetValue: 키가 존재하는 경우 값을 반환하고, 없으면 null 반환
  public tryGetValue(key: TKey): { success: boolean; value: TValue | null } {
    // getValue 메서드를 호출하여 값 검색
    const value = this.getValue(key, false);
    return { success: value !== null, value };
  }

  // getValue: 키에 해당하는 값을 반환. 없으면 예외 발생(옵션)
  public getValue(key: TKey, throwError: boolean): TValue | null {
    const entry = this.findEntry(key); // 키를 검색
    if (entry) return entry.value; // 키가 존재하면 값을 반환

    if (throwError) {
      throw new Error(`Key not found in dictionary: ${key}`); // 예외 발생
    }

    return null; // 키가 없으면 null 반환
  }

  // add: 키-값 쌍을 추가. 중복된 키가 있으면 예외 발생
  public add(key: TKey, value: TValue): void {
    this.setValue(key, value, true);
  }

  // set: 키-값 쌍을 추가하거나, 기존 키의 값을 업데이트
  public set(key: TKey, value: TValue): void {
    this.setValue(key, value);
  }

  // setValue: 내부 구현 메서드. 키-값 쌍을 추가하거나 업데이트
  private setValue(key: TKey, value: TValue, throwError: boolean = false): boolean {
    // 리사이징 조건: 저장된 개수가 버킷 크기의 125%를 초과
    if (this.count >= this._bucketSize * HashHelper.RESIZE_FACTOR) {
      this.resize(this._bucketSize + HashHelper.PRIME_FACTOR); // 리사이징 수행
    }

    const index = this.getBucketIndex(key); // 해시 버킷 인덱스 계산
    let bucketList = this._bucket[index];

    // 버킷 리스트가 없으면 생성
    if (!bucketList) {
      bucketList = new DoublyLinkedList<KeyValuePair<TKey, TValue>>();
      this._bucket[index] = bucketList;
    }

    // 버킷 리스트를 순회하며 기존 키 검색
    let existingEntry: KeyValuePair<TKey, TValue> | null = null;
    for (const entry of bucketList) {
      if (this._comparer.equals(entry.key, key)) {
        existingEntry = entry;
        break;
      }
    }

    if (existingEntry) {
      // 중복 키가 존재하면 처리
      if (throwError) {
        throw new Error(`Duplicate key: ${key}`);
      }
      existingEntry.value = value; // 기존 값을 업데이트
      return false;
    }

    // 새로운 키-값 쌍을 버킷 리스트에 추가
    bucketList.addLast(new KeyValuePair(key, value));
    this._keyList.push(key); // 키 배열에 추가
    return true;
  }

  // remove: 키-값 쌍을 삭제
public remove(key: TKey): boolean {
  const index = this.getBucketIndex(key); // 해시 버킷 인덱스 계산
  const bucketList = this._bucket[index];

  if (!bucketList) return false; // 버킷 리스트가 없으면 false 반환

  // 버킷 리스트를 순회하며 키를 검색
  let currentNode = bucketList.first;
  while (currentNode) {
    if (this._comparer.equals(currentNode.data.key, key)) {
      bucketList.remove(currentNode.data); // 버킷에서 삭제

      // 키 배열에서 키 삭제
      const keyIndex = this._keyList.findIndex(k => this._comparer.equals(k, key));
      if (keyIndex !== -1) {
        this._keyList.splice(keyIndex, 1); // 해당 인덱스에서 1개 요소 제거
      }
      // for (let i = 0; i < this._keyList.length; i++) {
      //   if (this._comparer.equals(this._keyList[i], key)) {
      //     // 삭제 후 배열 정렬
      //     for (let j = i; j < this._keyList.length - 1; j++) {
      //       this._keyList[j] = this._keyList[j + 1];
      //     }
      //     this._keyList.pop(); // 마지막 요소 제거
      //     break;
      //   }
      // }

      return true; // 삭제 성공
    }
    currentNode = currentNode.next;
  }

  return false; // 삭제 실패
}


  // toArray: 키-값 쌍을 배열로 변환
  public toArray(): KeyValuePair<TKey, TValue>[] {
    const result: KeyValuePair<TKey, TValue>[] = [];
    for (let i = 0; i < this._keyList.length; i++) {
      const entry = this.findEntry(this._keyList[i]); // 키에 해당하는 값을 검색
      if (entry) result.push(entry);
    }
    return result;
  }

  // [Symbol.iterator]: 삽입 순서에 따라 키-값 쌍을 순회
  [Symbol.iterator](): Iterator<KeyValuePair<TKey, TValue>> {
    let currentIndex = 0;

    return {
      next: (): IteratorResult<KeyValuePair<TKey, TValue>> => {
        if (currentIndex < this._keyList.length) {
          const key = this._keyList[currentIndex++];
          const entry = this.findEntry(key);
          if (entry) {
            return { done: false, value: entry };
          }
        }
        return { done: true, value: undefined as unknown as KeyValuePair<TKey, TValue> };
      },
    };
  }

  // resize: 해시 테이블 크기 변경 및 데이터 재배치
  private resize(newCapacity: number): void {
    const newSize = HashHelper.getPrime(newCapacity); // 새로운 크기 (소수)
    const newBucket: DoublyLinkedList<KeyValuePair<TKey, TValue>>[] = [];

    // 모든 데이터를 새로운 버킷으로 재배치
    for (const bucketList of this._bucket) {
      if (!bucketList) continue;

      for (const item of bucketList) {
        const hashCode = this._comparer.getHashCode(item.key);
        const newIndex = hashCode % newSize; // 새로운 인덱스 계산

        if (!newBucket[newIndex]) {
          newBucket[newIndex] = new DoublyLinkedList<KeyValuePair<TKey, TValue>>();
        }

        newBucket[newIndex].addLast(item); // 새로운 버킷에 추가
      }
    }

    this._bucket = newBucket; // 버킷 갱신
    this._bucketSize = newSize; // 버킷 크기 갱신
  }

  // findEntry: 특정 키에 해당하는 키-값 쌍 검색
  private findEntry(key: TKey): KeyValuePair<TKey, TValue> | null {
    const bucketList = this.findBucketList(key);
    if (!bucketList) return null;

    for (const entry of bucketList) {
      if (this._comparer.equals(entry.key, key)) {
        return entry; // 키-값 쌍 반환
      }
    }

    return null; // 키가 없으면 null 반환
  }

  // findBucketList: 특정 키의 버킷 리스트를 반환
  private findBucketList(key: TKey): DoublyLinkedList<KeyValuePair<TKey, TValue>> | null {
    const index = this.getBucketIndex(key);
    return this._bucket[index] || null;
  }

  // getBucketIndex: 키에 대한 해시 버킷 인덱스를 계산
  private getBucketIndex(key: TKey): number {
    const hashCode = this._comparer.getHashCode(key);
    return hashCode % this._bucketSize;
  }
}

// HashHelper: 해시 테이블 크기 조정에 필요한 헬퍼 클래스
class HashHelper {
  private static readonly s_primes: number[] = [3, 7, 11, 17, 23, 29, 37, 47, 59, 71, 89, 107, 131, 163, 197, 239, 293, 353, 431, 521, 631, 761, 919];

  public static PRIME_FACTOR: number = 2; // 리사이징 시 크기 증가 단위
  public static RESIZE_FACTOR: number = 1.25; // 리사이징 임계값

  // getPrime: 최소 크기 이상의 소수를 반환
  public static getPrime(min: number): number {
    for (const prime of this.s_primes) {
      if (prime >= min) return prime;
    }
    return min; // 해당 크기 이상 소수가 없으면 min 반환
  }
}