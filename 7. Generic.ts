/*
하나의 인터페이스로 여러 타입을 이용할 수 있게 하는 방법
*/

interface Value<T> {
  value: T,
}

const value: Value<number> = {
  value: 1,
}

const value2: Value<string> = {
  value: 'hi',
}

function toString<T>(a: T): string {
  return `${a}`;
}

toString<number>(5);