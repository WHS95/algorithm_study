function solution(a, b) {
  let result = 0;
  for (i = 0; i < a.length; i++) {
    result += a[i] * b[i];
  }
  return result;
}

//reduce를 사용한 해결방안
// reduce(acc(합쳐주는것),val(현재값),index(현재인덱스)

function solution(a, b) {
    var answer = a.reduce((acc, cur, idx) => acc += cur*b[idx], 0)
    return answer;
}