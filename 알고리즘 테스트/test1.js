let a = [
  [5, 7, 1],
  [2, 3, 5],
];
let b = [
  [5, 1, 6],
  [7, 5, 6],
];
let c = [
  [true, true, false],
  [false, true, false],
];

let result = [];
for (i = 0; i < a.length; i++) {
  let sum1 = [];
  for (j = 0; j < a[0].length; j++) {
    if (c[i][j] === true) {
      sum1.push(a[i][j] + b[i][j]);
    } else {
      sum1.push((a[i][j] + b[i][j]) * -1);
    }
  }
  result.push(sum1);
}
console.log(result);

//
// arr1.map((a,i)=>a.map(b,i)=>signs[i][j] ?  b+arr2[i][j] : -b - arr2[i][j]



//1. 행렬음양더하기
function solution(arr1, arr2, signs) {
  let answer = [[]];
  for (let i = 0; i < arr1.length; i++) {
    answer[i] = [];
    for (let j = 0; j < arr1[i].length; j++) {
      if (signs[i][j] === true) {
        answer[i][j] = arr1[i][j] + arr2[i][j];
      } else {
        answer[i][j] = -arr1[i][j] - arr2[i][j];
      }
    }
  }

  return answer;
}
let arr1 = [
  [5, 7, 1],
  [2, 3, 5],
];
let arr2 = [
  [5, 1, 6],
  [7, 5, 6],
];
let signs = [
  [true, true, false],
  [false, true, false],
];
console.log(solution(arr1, arr2, signs)); //[[10,8,-7],[-9,8,-11]]
