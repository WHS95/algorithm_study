function greatestCommonDivisor(a, b) {
  //   console.log(a, b);
  return b ? greatestCommonDivisor(b, a % b) : a;
}

console.log(greatestCommonDivisor(325, 5));

// console.log(50 % 150);//나누는 숫자가 나누어지는 숫자 보다 크면 그대로 나옮
