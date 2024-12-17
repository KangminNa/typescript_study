declare let isDone: boolean;
declare let decimal: number;
declare let hex: number;
declare let binary: number;
declare let octal: number;
declare let color: string;
declare let fullName: String;
declare let age: number;
declare let sentence: String;
declare let list1: number[];
declare let list2: Array<number>;
declare let x: [string, number];
declare enum Color1 {
    Red = 0,
    Green = 1,
    Blue = 2
}
declare let c1: Color1;
declare enum Color2 {
    Red = 1,
    Green = 2,
    Blue = 3
}
declare let c2: Color2;
declare enum Color3 {
    Red = 1,
    Green = 2,
    Blue = 3
}
declare let colorName: String;
declare let notSure: any;
declare let sure: any;
declare let prettySure: Object;
declare function warnUser(): void;
declare let unsuable: void;
declare function error(message: string): never;
declare function fail(): never;
declare function infiniteLoop(): never;
declare function create(o: object | null): void;
declare const obj: any;
declare const objWithProp: any;
declare let someValue: any;
declare let strLength: number;
declare let someValue2: any;
declare let strLength2: number;
