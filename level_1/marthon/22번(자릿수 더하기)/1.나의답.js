const n = 987;

let strarr = n.toString().split("");
//숫자열을 문자열로 변경후 배열로 변경

let numarr = (arg) => Number(arg);
let newarr = strarr.map(numarr);
//문자열 배열을 숫자열로 변경

let sum = newarr.reduce((a, b) => a + b);
//배열에 값들을 다 합치기

console.log(sum);

function solution(n) {
  let strarr = n.toString().split("");
  //숫자열을 문자열로 변경후 배열로 변경

  let numarr = (arg) => Number(arg);
  let newarr = strarr.map(numarr);
  //문자열 배열을 숫자열로 변경

  let sum = newarr.reduce((a, b) => a + b);
  //배열에 값들을 다 합치기

  return sum;
}
