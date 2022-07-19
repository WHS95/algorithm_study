// function solution(arr1, arr2){
// 	let answer=0;
// 	return answer;
// }
// let arr1=[9, 9, 9, 9, 7, 9, 8];
// let arr2=[23, 23, 30, 28, 30, 23, 23];
// console.log(solution(arr1, arr2))

var result = [];
var answer = 0;
let arr1 = [9, 7, 8, 9, 7, 9, 8];
let arr2 = [23, 22, 26, 26, 29, 27, 22];

for (i = 0; i < arr1.length; i++) {
  if (arr2[i] < 29) result.push(arr2[i] - arr1[i]);
  if (arr2[i] >= 29) result.push(21 - arr1[i]);
}

console.log(result);
answer =result.reduce((cur, acc) => cur + acc, 0);


console.log(answer);

    // var result = [];
    // var answer = [];
    // var final = [];
    // for (i = 0; i < numbers.length - 1; i++) {
    //   for (j = 1; j < numbers.length; j++) {
    //     if (i != j) result.push(numbers[i] + numbers[j]);
    //   }
    //   //인덱스별로 덧셈
    // }
    // answer = result.sort((a, b) => a - b);
    // //데이터 오름차순으로 정리
    // for (i = 0; i < answer.length; i++) {
    //   if (answer[i] !== answer[i + 1]) final.push(answer[i]);
    // }
    // //중복 값들 제거
    // return final;

