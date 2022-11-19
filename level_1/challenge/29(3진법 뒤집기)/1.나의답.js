

function solution(n) {
  let a = n.toString(3);
  //10진법 3진법으로 전환
  let b = a.split("").reverse();
  //배열역순으로 전환
  let d = Number(b.join(""));
  console.log(b);
  console.log(d);
  let result = Number.parseInt(d, 3);
  //3진법을 10진법으로 전환
  return result;
}
solution(45)

let num = 45
let change = num.toString(3)
console.log(change);//1200

let num2 = 1200
let change2 = parseInt(num2, 3);
console.log(change2);//45