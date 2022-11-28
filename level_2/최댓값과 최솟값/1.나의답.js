// const s = "1 2 3 4";
// const s = "1 2 3 4";
const s = "-1 -2 -3 -4";

let numArr = s.split(" ").map(Number);
let answer = `${Math.min(...numArr)} ${Math.max(...numArr)}`;
console.log(result);

function solution(s) {
  let numArr = s.split(" ").map(Number);
  let answer = `${Math.min(...numArr)} ${Math.max(...numArr)}`;
  return answer
}
