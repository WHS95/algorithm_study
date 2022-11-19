function solution(a, b) {
  let result = 0;
  for (i = 0; i < a.length; i++) {
    result += a[i] * b[i];
  }
  return result;
}

//reduce를 사용한 해결방안
// reduce(acc(합쳐주는것),(현재값),index(현재인덱스)
let a = [3, 2, 6];
let b = [1, 3, 5];

function solution(a, b) {
    var answer = a.reduce((acc, cur, idx) => acc += cur*b[idx],0)
    return answer;
}