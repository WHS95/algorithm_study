function solution(num) {
  //약수의 합
  let answer = 0;
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      answer += i;
    }
  }
  return answer;
}

