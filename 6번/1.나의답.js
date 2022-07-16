
// function solution(numbers) {
//   const a = 1;
//   const b = 9;
//   const allsum = ((a + b) * (Math.abs(b - a) + 1)) / 2;

//   const inputsum = numbers.reduce(function add(sum, currValue) {
//     return sum + currValue;
//   });

//   return allsum - inputsum;
// }


//모범 예시 코드
//가우스함수 에서 진행한걸 바로 구현
//reduce 함수를 화살표 함수로 구현

function solution(numbers) {
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}

