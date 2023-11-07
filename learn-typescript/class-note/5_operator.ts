let fruit: string | number;

function logFruit(fruit: string | number) {
  // 타입가드 지원
  if (typeof fruit === 'string') {
    fruit.length;
  }

  if (typeof fruit === 'number') {
    fruit.toFixed();
  }
  console.log(fruit);
}

logFruit(1);
logFruit('apple');


interface Devolper {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// 공통된 속성에만 접근할 수있다!!
function askSomeone(someone: Devolper | Person) {
  someone.name;
  // someone.skill;
  // someone.age;
}
askSomeone({ name: 'hi', age: 20 });
askSomeone({ name: 'hi', skill: 'js' });

function askSomeone1(someone: Devolper & Person) {
  someone.name;
  someone.age;
  someone.skill;
}

askSomeone1({ name: 'hi', skill: 'js', age: 20 });