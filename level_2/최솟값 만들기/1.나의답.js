const A = [1, 2];
const B = [3, 4];

//각각의 변수를 오름차순으로 sort 하기

function solution(A, B) {
  const len = A.length;
  let result = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  for (let i = 0; i < len; i++) {
    result += A[i] * B[i];
  }

  return result;
}

console.log(solution(A, B));

