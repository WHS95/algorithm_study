//나의 답안//
function solution(x) {
  let srtarr = x.toString().split("").map(Number);
  //숫자열을 숫자배열로 변경
  let sumarr = srtarr.reduce((a, b) => a + b);
  //각각의 자릿수의 합
  let result = arr % sumarr === 0;
  //하샤드 수
  return result;
}
