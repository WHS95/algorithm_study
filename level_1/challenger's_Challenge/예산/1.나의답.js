let d = [2, 2, 3, 3];
let budget = 10;

function solution(d, budget) {
  //d에 들어올 배열을 오름 차순으로 정렬
  let arr = d.sort((a, b) => a - b);
  let counter = 0;
  let req = 0;

  //budget에서 요구 되는 값보다 클경우
  arr.map((element) => {
    req += element;
    if (budget >= req) counter++;
  });

  return counter;
}

console.log(solution(d, budget));
