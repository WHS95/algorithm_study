// 1. 두 개의 변수(숫자)를 받아서 덧셈과 뺄셈을 하는 함수를 각각 만들어 주세요.
function add(a, b) {
    return a + b;
  }
  
  function minus(a, b) {
    return a - b;
  }
  
  // 2. 두 개의 변수(숫자)를 받아서 곱셈과 나눗셈을 하는 함수를 각각 만들어 주세요.
  function multiply(a, b) {
    return a * b;
  }
  
  function division(a, b) {
    return a / b;
  }
  
  // 3. 두 개의 변수(숫자)와 한 개의 문자('+', '-', '*', '/')를 받는 함수를 만들어 주세요.
  // 먼저 만들었던 함수를 이용해서 문자에 해당되는 사칙연산을 수행하는 함수입니다.
  
  function calulator(a, b, operator) {
    if (operator === "+") {
      return add(a, b);
    } else if (operator === "-") {
      return minus(a, b);
    } else if (operator === "*") {
      return multiply(a, b);
    } else if (operator === "/") {
      return division(a, b);
    }
  }
  
  // 4. 나의 문자열을 받는 함수를 만들어 주세요. (`a+b-c*d`)
  // 문자열은 사칙연산을 하는 계산식입니다. 문자열을 인식하여 결과를 내는 함수를 만들어 주세요.
  // 난이도를 고려해서 계산식은 괄호처리 또는 계산 우선순위(곱셈 또는 나눗셈을 먼저)는 없습니다.
  
  function stringCalculator(string) {
    const numbers = string.split(/\+|\-|\*|\//g);
    const types = string.match(/\+|\-|\*|\//g);
  
    let result = parseInt(numbers[0]);
    for (let i = 0; i < numbers.length - 1; i++) {
      result = calulator(result, parseInt(numbers[i + 1]), types[i]);
    }
    return result;
  }
  
  console.log(stringCalculator(`10+5-1*5`)); // 70
  console.log(stringCalculator(`20-5/3`)); // 5