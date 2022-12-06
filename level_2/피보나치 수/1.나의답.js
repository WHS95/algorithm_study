//재귀함수를 사용하여 문제 풀이
function solution(n) {
  let cache = [0, 1];
  if (cache[n] === undefined) {
    return (solution(n - 1) + solution(n - 2)) % 1234567;
  } else {
    return cache[n];
  }
}

//문제:갯수가 늘어남에 따라 O(n^2)이 된다.

//반복문
function solution(n) {
  let fNum = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fNum[i] = (fNum[i - 1] + fNum[i - 2]) % 1234567;  
    //여기서 나누는이유
    //자바스크립트에서 보장하는 최대 정수값 9007199254740991을 넘어가면 오류발생 그렇기에 사전에 나눈다.
  }
  return fNum[n];
}
console.log(solution(7));

// [ 0, 1, 1 ]
// [ 0, 1, 1, 2 ]
// [ 0, 1, 1, 2, 3 ]
// [ 0, 1, 1, 2, 3, 5 ]
// [ 0, 1, 1, 2,3, 5, 8 ]




//onlydev.tistory.com/69
// N으로 나눈 나머지를 반환하는 문제는 십중팔구
// "int64도 버티지 못할만큼 숫자가 엄청 커지니까 적당히 나눠라"는 늬앙스입니다.
// 중간에 모듈러 연산을 안해주면 일찍이 오버플로우가 발생했을테니 오답이죠.
// - 프로그래머스 aerocode님
