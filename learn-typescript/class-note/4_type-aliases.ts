// https://joshua1988.github.io/ts/guide/type-alias.html#%ED%83%80%EC%9E%85-%EB%B3%84%EC%B9%AD-type-aliases

// interface Person {
//   name: string,
//   age: number
// }

type Person = {
  name: string,
  age: number
}

var gisu: Person = {
  name: '세호',
  age: 40,
}

// 인터페이스와 타입별칭의 차이는 무엇일까?
// 타입별칭은 말 그대로 새로운 타입을 생성하는 것이 아니라 타입을 정의하고 나중에 사용하려고 정의하는 것이다.
// 타입은 확장이 되지 않지만, 인터페이스는 확장이 가능하다.