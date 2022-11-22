function solution(n, m) {
  //공약수를 구하는 함수
  function commonFactor(num) {
    let number = num;
    let arr = [];
    for (let i = 1; i <= number; i++) {
      if (num % i === 0) {
        arr.push(i);
      }
    }
    return arr;
  }

  //최대 공약수를 구하는 함수
  function maxCommonFactor(n, m) {
    let num1CommonFactor = commonFactor(n); //num1의 공약수
    let num2CommonFactor = commonFactor(m); //num2의 공약수

    //각각의 공약수중 중복된값만 intersection변수에 담기
    let intersection = num1CommonFactor.filter((element) =>
      num2CommonFactor.includes(element)
    );

    //intersection에 담긴 맨 첫번째값 즉 제일 작은 값가져오기
    let result = intersection[intersection.length - 1];

    return result;
  }

  let greatestCommonDivisor = maxCommonFactor(n, m);

  let leastCommonMultiple = (n * m) / maxCommonFactor(n, m);

  return [greatestCommonDivisor, leastCommonMultiple];
}

console.log(solution(3, 12));

//다른사람의 풀이(유클리드 호제법 사용)
https://kangdanne.tistory.com/176
const solutuon = (n, m) => {
  const gcd = (a, b) => {
    if (b === 0) return a; // 나누어지면 a 리턴
    return gcd(b, a % b); // 나누어지지 않는다면 b와 a%b를 다시 나눈다
  };
  const lcm = (a, b) => (a * b) / gcd(a, b); // 두 수의 곱을 최대공약수로 나눈다.
  return console.log(
    `최대 공약수는? ${gcd(n, m)}, 최대 공배수는? ${lcm(n, m)}`
  );
};
console.log(solutuon(6, 12));
