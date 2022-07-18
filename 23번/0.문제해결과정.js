//숫자를 문자열로
//문자열을 배열로
//문자열 배열을 숫자열로
//배열을 내림차순으로 sort

let n =12345;

let str = n.toString();

let arr = str.split('');

let chg = (a) => Number(a);
let numarr = arr.map(chg).reverse()

// numarr.sort(function(a, b)  {
//     return b - a;
//   });

console.log(numarr)