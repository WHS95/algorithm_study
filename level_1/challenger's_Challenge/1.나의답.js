function solution(left, right) {
  //약수의 갯수를 파악하는 함수
  function divisor(num) {
    let count = 0;
    for (let i = 0; i <= num; i++) {
      if (num % i === 0) {
        count++;
      }
    }
    return count;
  }
  //약수의 갯수에 따른 음수 양수 만들어 합산
  function result(num1, num2) {
    let sumAll = 0;
    for (let i = num1; i <= num2; i++) {
      if (divisor(i) % 2 === 0) {
        sumAll += i;
      } else {
        sumAll -= i;
      }
    }
    return sumAll;
  }
  return result(left, right);
}

console.log(solution(24, 27));


//다른사람의 풀이

function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
      //제곱근이 정수이면 약수의 갯수가 홀수이다를 이용한 방법
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}