class fourArithmeticOperations {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }
  // 1. 두 개의 변수(숫자)를 받아서 덧셈과 뺄셈을 하는 함수를 각각 만들어 주세요.
  add() {
    return this.num1 + this.num2;
  }
  subtract() {
    return this.num1 - this.num2;
  }
  // 2. 두 개의 변수(숫자)를 받아서 곱셈과 나눗셈을 하는 함수를 각각 만들어 주세요.
  multiply() {
    return this.num1 * this.num2;
  }
  divide() {
    return this.num1 / this.num2;
  }
}
// 3. 두 개의 변수(숫자)와 한 개의 문자('+', '-', '*', '/')를 받는 함수를 만들어 주세요.
// 먼저 만들었던 함수를 이용해서 문자에 해당되는 사칙연산을 수행하는 함수입니다.
// eval() 사용금지
function cal(num1, num2, sign) {
  const calculate = new fourArithmeticOperations();
  if (sign === "+") calculate.add(num1, num2);
  if (sign === "-") calculate.subtract(num1, num2);
  if (sign === "*") calculate.multiply(num1, num2);
  if (sign === "/") calculate.divide(num1, num2);
}
console.log(cal(3, 4, "-")); // -1

// 4. 나의 문자열을 받는 함수를 만들어 주세요. (`a+b-c*d`)
// 문자열은 사칙연산을 하는 계산식입니다. 문자열을 인식하여 결과를 내는 함수를 만들어 주세요.
// 난이도를 고려해서 계산식은 괄호처리 또는 계산 우선순위(곱셈 또는 나눗셈을 먼저)는 없습니다.
// eval() 사용금지

function cal2(data) {
  const arr = data.split("");
  const numArrSplited = data.split(/\+|\-|\*|\//);

  //숫자만의 배열을 만든다.
  //[ 10, 5, 1, 5 ]
  const changeNumber = (a) => Number(a);
  const numarr = numArrSplited.map(changeNumber);

  //부호만의 배열을 만든다.
  //[ '+', '-', '*' ]
  const signArr = arr.filter(
    (e) => e === "+" || e === "-" || e === "*" || e === "/"
  );

  //최종값에 첫번째 값을 할당한다.
  let answer = numarr[0];

  //각부호에 맞게 계산을 한다.
  for (let i = 0; i < signArr.length; i++) {
    if (signArr[i] === "+") answer = answer + numarr[i + 1];
    if (signArr[i] === "-") answer = answer - numarr[i + 1];
    if (signArr[i] === "*") answer = answer * numarr[i + 1];
    if (signArr[i] === "/") answer = answer / numarr[i + 1];
  }

  return answer;
}

console.log(cal2(`10+5-1*5`)); //70
