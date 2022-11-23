function solution(n) {
  let arr = n.toString().split("");
  //숫자를 문자열로
  //문자열을 배열로
  let chg = (a) => Number(a);
  let numarr = arr.map(chg);
  ['1', '2', '3'].map(Number)
  //문자열 배열을 숫자열로
  numarr.sort((a, b) => b - a);
  //배열을 내림차순으로 sort
  return numarr;
}

//자연수를 그냥 역으로 만 하면 되는데 오름차순이라고 생각을 하였다.
//문제를 좀 더 정확하게 읽는 능력 필요

function solution(n) {
  let arr = n.toString().split("");
  //숫자를 문자열로 바꾼후 배열로 변경
  let chg = (a) => Number(a);
  let numarr = arr.map(chg);
  //문자열 배열을 숫자열로
  return numarr.reverse();
  //역순으로 변경
}

//다른 답안 (수학적 해결)

function solution(n) {
  var arr = [];

  do {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);

  return arr;
}

//다른 답안 
function solution(n) {
    return (n + '').split('').reverse().map(n => parseInt(n));
}