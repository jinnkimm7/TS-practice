interface User {
  name: string;
  age: number;
}

// 변수에 인터페이스 활용
var seho: User = {
  name: 'sehh',
  age: 20,
};

// 함수에 인터페이스 활용
function getUser(user: User): void {
  console.log(user);
}

getUser({ name: 'jin', age: 20 });

// 함수의 스펙에 인터페이스릃 활용
interface SumFunction {
  (a: number, b: number): number,
}

var sum: SumFunction = function (a: number, b: number): number {
  return a + b;
};

// 인덱싱
interface StringArray {
  [index: number]: string;
}

const arr: StringArray = ['Thor', ' Hulk'];



// https://joshua1988.github.io/ts/usage/indexable.html#%EB%B0%B0%EC%97%B4-%EC%9A%94%EC%86%8C-%EC%A0%91%EA%B7%BC