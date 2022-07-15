const str = '-1234';

const num1 = Number(str);
const num2 = Number('1234.5');
const num3 = Number(undefined);
const num4 = Number('abcd');

console.log(num1 + ', ' + typeof num1);
console.log(num2 + ', ' + typeof num2);
console.log(num3 + ', ' + typeof num3);
console.log(num4 + ', ' + typeof num4);