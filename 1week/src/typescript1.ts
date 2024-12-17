// 기본타입 설명
// https://typescript-kr.github.io/pages/basic-types.html


// Boolean
let isDone: boolean = false;
console.log(isDone)

// Number
// 16진수, 10진수, ECMAScript 2015의 2진수, 8진수 지원
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

console.log(decimal, hex, binary, octal)


// String
let color: string = "blue";
color = 'red';

// 백틱을 이용하여 string 문자열 표현
let fullName: String = 'Bob Bobbington';
let age: number = 37;
let sentence: String = `Hello my name is ${ fullName }. I'll be ${ age + 1 } years old next year`;
console.log(sentence);

// Array
let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];
console.log("list1 :",  list1, "list2:", list2);


// Tuple
let x: [string, number];

// 초기화
x = ['hello', 10];

console.log(x);
console.log(x[0], x[1]);

// 열거 Enum
enum Color1 {Red, Green, Blue}
let c1: Color1 = Color1.Red;

enum Color2 {Red = 1, Green, Blue}
let c2: Color2 = Color2.Green

console.log(c1, c2)

// 유용한 기능
// 아래와 같이 enum member의 이름을 알아낼 수 있음. 신기하다
enum Color3 {Red = 1, Green, Blue}
let colorName: String = Color3[2];

console.log(colorName);

// any : 애플리케이션을 만들 때 알지 못하는 타입을 표현해야할 때, 예를들어 사용자로부터 받은 데이터나 서드 파티 라이브러리 같은 동적인 컨텐츠들.
// 이 경우 타입 검사를 하지 않고, 그 값들이 컴파일 시간에 검사를 통과하길 원한다면 any 사용

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // 성공, 분명히 boolean 나와야함

console.log(notSure);

/* 
any 타입은 기존에 JavaScript로 작업할 수 있는 강력한 방법으로, 
컴파일 중에 점진적으로 타입 검사를 하거나 하지 않을 수 있습니다. 
혹 다른 언어에서 그렇듯, Object가 비슷한 역할을 할 수 있을 것 같다고 생각할 수도 있습니다. 
그런데, Object로 선언된 변수들은 오직 어떤 값이든 그 변수에 할당할 수 있게 해주지만 실제로 메서드가 존재하더라도, 
임의로 호출할 수는 없습니다:
*/

let sure: any = 4;
//sure.ifItExists(); // ifItExists는 런타임엔 존재함
// sure.toFixed(); // toFixed는 존재하지만 컴파일러는 검사하지 않음.

let prettySure: Object = 4;
// prettySure.toFixed(); // 오류: 프로퍼티는 'toFixed'는 'object'에 존재하지 않기 때문.
console.log(sure, prettySure);


/* 
모르는거.

1. ifItExists()
2. toFixed()
3. 프로퍼티

property?

객체또는 클래스의 구성요소. 프로퍼티는 값을 저장하고 타입을 정의할 수 있음.
예를들어

interface User {
    name: String // require property
    age?: number
    isActive: boolean
}

ifItExists

자체 문법이나, 내장된 기능이 아니라 조건부 프로퍼티 체크를 설명할 때 자주 사용 
예를들어 객체의 특정 프로퍼티가 존재할 수도 있고, 존재하지 않을 수도 있을 경우를 처리할 때 사용

toFixed()

숫자를 소수점 자리수까지 문자열로 변환하는 내장 메서드
*/

// void

function warnUser(): void {
    console.log('This is my warning message');
}

warnUser()

/* 
void를 타입 변수를 선언하는 것은 유용하지 않은데, 
왜냐하면 그 변수에는 null(--strictNullChecks을 사용하지 않을 때만 해당, 자세한 건 다음 섹션을 참고)또는 undefined 만 할당할 수 있기 때문입니다
*/

let unsuable: void = undefined;
// unsuable = null; //성공 '--stricNullchecks'를 사용하지 않을 때만

/*
모르는거 2.

void, null and undefined

void는 function 일때 유용하긴하나, 변수일땐 사용하진 않음. 그런데 변수에 하고 싶다면 undefined만 할당 가능
그리고 null과 undefined를 하면 할당을 하지 못하지만 유니온 타입인 string | null | undefined를 사용할 수 있는 경우가 생기지만, 이후에 알려줌
*/

// Never

/*
never 타입은 절대 발생할 수 없는 타입을 나타냅니다. 
예를 들어, never는 함수 표현식이나 화살표 함수 표현식에서 항상 오류를 발생시키거나 절대 반환하지 않는 반환 타입으로 쓰입니다. 
변수 또한 타입 가드에 의해 아무 타입도 얻지 못하게 좁혀지면 never 타입을 얻게 될 수 있습니다.

never타입은 모든 타입에 할당 가능한 하위 타입입니다. 
하지만 어떤 타입도 never에 할당할 수 있거나, 하위 타입이 아닙니다.(never 자신은 제외) 
심지어 any 도 never에 할당할 수 없습니다.

*/

// never를 반환하는 함수는 마지막에 도달할 수 없다.
function error(message: string): never {
    throw new Error(message);
}

// 반환 타입이 never로 추론된다
function fail() {
    return error('Something failed');
}

// never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
function infiniteLoop(): never {
    while (true) {

    }
}

// fail()
// infiniteLoop()
// error('안녕하세요!')


/* 
여기서 강제로 method를 호출시켰을 때, 어떻게 호출되어서 처리하는지 컴파일에서, js 변화까지도 확인해보기.
인터페이스에서 해당 never 예외 처리 및 무한로프를 어떻게 관리하고 처리하는지에 대해 정리하기
*/

// object
/* 
원시타입이 아닌 타입으로 이루어진 객체
*/



function create(o: object | null): void {
    console.log("Object created:", o);
}

create({ prop: 0 }); // 성공
create(null); // 성공


/*
Object.create 사용하기
create 함수의 목적이 JavaScript의 **Object.create**를 대체하려는 것이라면, Object.create를 사용하면 됩니다.
*/
const obj = Object.create(null); // null 프로토타입을 가진 객체 생성
console.log(obj);

const objWithProp = Object.create({}, {
    prop: { value: 0, writable: true, configurable: true, enumerable: true }
});
console.log(objWithProp.prop); // 0


/*
문제3.

declare function**는 TypeScript에서 함수의 타입 선언만 하는 키워드입니다.

declare function create(o: object | null): void; 문제의 코드드

create({ prop: 0 }); // 성공
create(null); // 성공

*/

// 타입 단언(Type assertions)
/*
가끔, TypeScript보다 개발자가 값에 대해 더 잘 알고 일을 때가 있습니다. 
대개, 이런 경우는 어떤 엔티티의 실제 타입이 현재 타입보다 더 구체적일 때 발생합니다.

타입 단언(Type assertions) 은 컴파일러에게 "날 믿어, 난 내가 뭘 하고 있는지 알아"라고 말해주는 방법입니다. 
타입 단언은 다른 언어의 타입 변환(형 변환)과 유사하지만, 다른 특별한 검사를 하거나 데이터를 재구성하지는 않습니다. 

이는 런타임에 영향을 미치지 않으며, 온전히 컴파일러만 이를 사용합니다. 타입 스크립트는 개발자가 필요한 어떤 특정 검사를 수행했다고 인지합니다.

 */

//타입 단언에는 두 가지 형태가 있습니다. 하나는, "angle-bracket" 문법입니다
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

// 다른 하나는 as- 문법입니다.
let someValue2: any = "this is a string";
let strLength2: number = (someValue as string).length;


/*
let에 관하여
지금까지 더 익숙할 수도 있는 JavaScript의 var 키워드 대신 let 키워드를 이용했다는 걸 알 수 있습니다. 
let 키워드는 JavaScript ES2015에서 소개되었고, 
var보다 안전하다는 이유로, 현재 표준으로 여겨지고 있습니다.
 나중에 더 자세히 살펴보겠지만, 
 대부분의 JavaScript의 문제들이 let을 사용해서 해결되며, 
 때문에 가능한 경우 최대한 var대신 let을 사용하셔야 합니다.
*/

