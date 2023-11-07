// function logText(text) {
//   console.log(text)
//   return text;
// }

// logText('hi');
// logText(10);
// logText(true);

// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }

// logText<string>('안녕');


// function logText(text: string | number) {
//   return text;
// }

// console.log(logText('a').split(''));

function logText<T>(text: T): T {
  console.log(text);
  return text;
}

const hi = logText<string>('hi');
hi.split('');
const bool = logText<boolean>(true);

// 제네릭: 타입을 비워놓은 상태에서 호출하는 시점에 타입을 결정한다 !

// 인터페이스에 제네릭 적용하기 

// interface Dropdown {
//   value: string;
//   selected: boolean;
// }

interface DropDown<T> {
  value: T;
  selected: boolean;
}

const obj: DropDown<string> = { value: 'abc', selected: true };
const obj2: DropDown<number> = { value: 123, selected: true };

// 제네릭의 타입 제한
// function logTextLength<T>(text: T[]): T[] {
//   console.log(text.length);
//   text.forEach((text) => {
//     console.log(text);
//   })
//   return text;
// }

// logTextLength<string>(['hi', 'hola']);

// 제네릭의 타입 제한 2 - 정의된 타입이용하기

interface LengthType {
  length: number;
}

function logTextLength<T extends LengthType>(text: T): T {
  text.length;
  return text;
}

logTextLength('abc');
logTextLength(10);
logTextLength({ length: 10 });

// 제네릭의 타입 제햔 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

getShoppingItemOption("name");