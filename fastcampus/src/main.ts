// 타입 종류

// 문자
let str: string;
let red: string = "red";
let green: string = 'green';
let myColor: string = `My color is ${red}`;
let yourColor: string = 'Your color is' + green;

// 숫자
let num: number;
let integer: number = 6;
let float: number = 3.14;
let infinity: number = Infinity;
let nan: number = NaN;

// 불린
let isBoolean: boolean;
let isDone: boolean = true;

// Null / Undefined
let nul: null;
let und: undefined;
nul = null;
// null 변수는 무조건 null을 할당해야한다. 하지않으면 에러
let number: number;
number = 5
// 사용할 때는 값을 할당하고 사용해야한다.
console.log(nul);
console.log(und);
console.log(number);

// 배열
const fruits: string[] = ['Apple', 'Banana', 'Cherry'];
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
const union: (string | number)[] = ['Apple', 1, 2, 3, 'Banana'];
const array: [] = [];

// 객체
const obj: object = {};
const arr: object = [];
const func: object = function () { }

const userA: {
  name: string
  age: number
  isValid: boolean
} = {
  name: 'Heropy',
  age: 85,
  isValid: true,
};

const userB: {
  name: string
  age: number
  isValid: boolean
} = {
  name: 'Neo',
  age: 22,
  isValid: false,
}

interface User {
  name: string
  age: number
  isValid: boolean
}

const userC: User = {
  name: 'Hi',
  age: 20,
  isValid: true,
  // email: 'adf@google.com'
}

// 함수
const add: (x: number, y: number) => number
  = function (x: number, y: number): number {
    return x + y;
  };
const a: number = add(1, 2);

const hello: () => void
  = function (): void {
    console.log('hello world~');
  };
const b: void = hello();

// Any -> 무엇을 할당하든지 간에 에러가 발생하지 않는다. -> 타입스크립트를 쓰는 장점이 사라진다.
// 사용을 지양하자!
let hello1: any = 'Hello World!';
hello1 = 123;
hello1 = false;
hello1 = null;
hello1 = {};
hello1 = [];
hello1 = function () { };

// Unknown
// 코드 작성시 데이터의 타입에 정확하게 무엇을 할당해야하는지 알 수 없을 때
// any보다 엄격한 타입 검사를 제공하므로 unknown을 사용하자! 
const u: unknown = 123;

// Tuple -> 배열에 정확한 element 갯수와 순서를 정해야할 때 사용한다.
const tuple: [string, number, boolean] = ['a', 123, true];
const user: [number, string, boolean][]
  = [[1, 'Neo', true], [2, 'Evan', false], [3, 'Lewis', true]];

// Void
function hello2(msg: string): void {
  console.log(`Hello ${msg}`);
}
const h1: void = hello2('world');

// Union
let union2: string | number;
// union2 = boolean;
union2 = 'Hello';
union2 = 123;

// Intersection
interface User {
  name: string;
  age: number;
}

interface Validation {
  isValid: boolean;
}

const heropy: User & Validation = {
  name: 'Jin',
  age: 20,
  isValid: true,
}


// 타입 추론