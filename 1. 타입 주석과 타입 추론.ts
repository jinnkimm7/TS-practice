/*
타입 주석은 변수, 상수 혹은 반환값이 무슨 타입인지를 나타내는 것을 의미한다.
타입 추론은 해당 변수가 어떤 타입인지 추론하는 것이다.
타입을 생략한다면 컴파일 타임이 알아낸다.
*/

// 타입 주석
let a: number = 1; // a 변수는 number 타입이다.

// 타입 추론
let b = 2; // b는 number 타입이다.
// b = 'a'; // b를 다른 타입으로 바꾸려고하면 에러가 발생한다.
let c: string = 'hello ts!';
let d: boolean = true;
let e = { a: 1 };
e.a = 5;
// e.b = 'hello'; // 값을 추가하면 에러가 발생한다.
let f: number[] = [];
f.push(1);
// f.push('hello'); // 에러
let g: 'good' = 'good'; // 특정 값을 타입으로 지정할 수 있다.
let h: any = 3; // 아무 값이나 넣어줄수 있다.
h = true;
h = 'hello';

// 함수에도 적용할 수 있다.
function add(a: number, b: number): number {
  return a + b;
}
// console.log(add(1, '2')); // 에러