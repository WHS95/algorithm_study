function solution(n) {
  let result = 0;
  for (let i = 2; i <= n; i++) {
    //약수의 갯수
    let count = 0;
    for (let j = 1; j < i; j++) {
      if (i % j === 0) count += 1;
    }
    //약수의 갯수가 하니일때 카운트
    if (count === 1) {
      result += 1;
    }
  }
  return result;
}
//시간초과... 내가봐도 효율성이 없다..

//에라토스 체라는 소수를 구하는 방식의 적용하여 해결
function solution(n) {
  // 인덱스 번호가 주어진 숫자 n과 대응하도록
  // 빈 배열을 만들고 원소는 true 값으로 채운다.
  // true는 소수라는 의미
  // 배열은 0부터 시작하므로, 주어진 숫자 n에 1을 더해준다.s
  let arr = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);
  //에라토스테네스의 체
  //모든 자연수는 소수들의 곱으로 표현된다고 했다.
  //그래서 에라토스테네스는 주어진 숫자 값의 범위 안에서,
  // 자기 자신을 제외한 배수 값을 지운다.
  for (let i = 2; i * i <= n; i++) {
    //소수가 true인경우이므로
    if (arr[i]) {
      //소수의 배수들을 false로 바꾸면 에라토스테네스의 체 공식에의해
      //소수만 남게 된다.
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  //소수인 true만 배열에 담는다.
  const result = arr.filter((value) => {
    return value === true;
  });
  return result.length;
}

console.log(solution(10));

//set을 이용한방식
function solution(n) {
  const s = new Set();
  for (let i = 1; i <= n; i += 2) {
    s.add(i);
  }
  s.delete(1);
  s.add(2);
  for (let j = 3; j < Math.sqrt(n); j++) {
    if (s.has(j)) {
      for (let k = j * 2; k <= n; k += j) {
        s.delete(k);
      }
    }
  }
  return s.size;
}
