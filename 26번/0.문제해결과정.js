//math에서 제곱근기능을 하는 메소들를 찾는다.
// 적용하여 정수가 아니면 -1 정수이면 (a+1)^2를 한다.

let n = 225;
let answer = 0;
let root = Math.sqrt(n);

// console.log(root)

if (root % 1 === 0) {
  answer = Math.pow(root + 1, 2);
} else {
  answer = -1;
}

console.log(answer);
