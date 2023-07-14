/*
여러 자료형의 값을 가질 수 있게하는 방법
합집합 타입과 교집합 타입이 있다.
*/

let numOrString: number | string = 1;
numOrString = 'string';
// numOrString = true; // 에러

// let numAndString: number & string = ''; // 원시타입에서 사용할 수 없다.
// 인터페이스에서 유용하게 사용할 수 있다.

interface Name {
  name: string,
}

interface Age {
  age: number,
}

let jin: Name & Age = {
  name: 'Jin',
  age: 20,
}

// 대수타입을 이용해서 새로운 타입을 만들어 낼 수 있다. 
type Person = Name & Age;
let kim: Person = {
  name: 'Kim',
  age: 20,
}