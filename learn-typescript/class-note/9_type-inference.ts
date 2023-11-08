// 타입 추론 기본 1
var a = 'abc';

function getB(b = 1) {
  return b;
}

// getB('bcd');
getB(10);

// 타입 추론 기본 2
// interface Dropdown<T> {
//   value: T;
//   title: string;
// }

// var shoppingItem: Dropdown<string> = { value: 'ab', title: 'hi' };

// 타입 추론 기본 3
interface Dropdown<T> {
  value: T;
  title: string;
}

interface DetailedDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
}

var detailedItem: DetailedDropdown<string> = {
  description: 'good',
  tag: 'hi',
  value: 'hi',
  title: 'hello world'
};
