var a;
a = 20;
a = 'b';
var b = a as string;

// DOM API 조작시 타입단언을 사용하면 좋다.
// 타입스크립트보다 개발자인 내가 더 이 타입에 대해서 잘 알고 있다! 건들지말라라는 의미정도로 해석하면 좋다.
const $div = document.querySelector('div') as HTMLDivElement;
$div.innerText = 'hi';