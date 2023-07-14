/*
객체의 타입을 정의하는 방법. interface라는 키워드로 가능하다.
*/

interface Company {
  name: string,
  age: number,
  address?: string, // 값을 넣지 않고 싶을때 ?(optional)를 붙여준다. -> undefined 가능 -> 다시말하면 값을 넣어주지 않아도된다!
}

const citizen: Company = {
  name: 'Daejeon Citizen',
  age: 27,
  // address: 'Noeun',
}


// 익명 인터페이스
const person: {
  name: string,
  age?: number,
} = {
  name: 'Jin',
  age: 20,
}