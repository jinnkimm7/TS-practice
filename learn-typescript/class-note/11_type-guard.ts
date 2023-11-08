interface Devolper {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Devolper | Person {
  return { name: 'Tony', age: 33, skill: 'Iron Making' };
}

var tony = introduce();
console.log(introduce.name);

if ((tony as Devolper).skill) {
  console.log((tony as Devolper).skill);
} else if ((tony as Person).age) {
  console.log((tony as Person).age);
}

// 타입가드
function isDeveloper(target: Devolper | Person): target is Devolper {
  return (target as Devolper).skill !== undefined;
}

if (isDeveloper(tony)) {
  tony.skill;
} else {
  tony.age;
}