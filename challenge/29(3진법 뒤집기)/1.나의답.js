

function solution(n) {
  let a = n.toString(3);
  //10진법 3진법으로 전환
  let b = a.split("").reverse();
  //배열역순으로 전환
  let d = Number(b.join(""));
  let result = Number.parseInt(d, 3);
  //3진법을 10진법으로 전환
  return result;
}
