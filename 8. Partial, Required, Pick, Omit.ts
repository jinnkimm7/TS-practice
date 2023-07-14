/*
기존 interface를 재활용할 수 있게 만든다.
*/

interface User {
  id: number,
  name: string,
  age: number,
  address: string,
  createAt?: string,
  updateAt?: string,
}

// 모든 필드가 Optional이 된다.
const partial: Partial<User> = {};

// 옵셔널을 가진 key들도 Required가 된다. 즉 모든 필드가 Required 된다.
const required: Required<User> = {
  id: 1,
  name: 'Jin',
  age: 20,
  address: 'Daejeon',
  createAt: '',
  updateAt: '',
}

// 특정 필드만 골라서 사용할 수 있다.
const pick: Pick<User, 'name' | 'age'> = {
  name: 'Jin',
  age: 20,
}

// 특정 필드만 빼고 사용할 수 있다.
const omit: Omit<User, 'id' | 'createAt' | 'updateAt'> = {
  name: 'asdf',
  age: 120,
  address: '',
}

const mixed: Omit<User, 'id' | 'address' | 'createdAt' | 'updatedAt'> & Pick<Partial<User>, 'address' | 'age'> = {
  name: 'asdfad',
  age: 20,
}