const s = "110010101001";
const d = "10";
//[3,8]


function solution(s) {
  let count = 0;
  let deleteZeroCount = 0;
  let result = s;
  while (result.length !== 1) {
    let originlen = result.length;
    //0을 정규표현식으로 지운다.
    let delteZero = result.replace(/[0]/g, "");
    let len = delteZero.length;
    //0을 삭제 한 갯수를 카운터 한다.
    deleteZeroCount += originlen - len;
    result = len.toString(2);
    count += 1;
  }
  return [count, deleteZeroCount];
}

console.log(solution(s));
