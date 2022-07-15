// 문제 설명
// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. 
//numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ numbers의 길이 ≤ 9
// 0 ≤ numbers의 모든 원소 ≤ 9
// numbers의 모든 원소는 서로 다릅니다.
// 입출력 예
// numbers	result
// [1,2,3,4,6,7,8,0]	14
// [5,8,4,0,6,7,9]	6
// 입출력 예 설명
// 입출력 예 #1

// 5, 9가 numbers에 없으므로, 5 + 9 = 14를 return 해야 합니다.
// 입출력 예 #2

// 1, 2, 3이 numbers에 없으므로, 1 + 2 + 3 = 6을 return 해야 합니다.
// solution.js
// 1
// function solution(numbers) {
// 2
//     var answer = -1;
// 3
    
// 4
    
// 5
//     return answer;
// 6
// }
// 실행 결과
// 실행 결과가 여기에 표시됩니다.
//-------------------------------//-------------------------------//-------------------------------//-------------------------------


// 1) 1~9까지 모두 더한 수에 서 입력배열의 전체 합을 빼서 도출하자
//2) reduce 함수를 이용해서 배열 전체 합을 각각 구해서 빼자
//3) 1~9까지 모두 더한수는 가우스 함수를 이용하자 



//-------------------------------//-------------------------------//-------------------------------

count = [1, 2, 3, 4, 6, 7, 8, 0];

//입력된 배열을 reduce 함수를 이용하여 배열의 합을 구한다.
const inputsum = count.reduce(function add(sum, currValue) {
  return sum + currValue;
});

console.log(inputsum);

//allsum 가우스 함수를 이용하여 1~9값을 구하였다.
let a = 1;
let b = 9;
let allsum = ((a + b) * (Math.abs(b - a) + 1)) / 2;

console.log(allsum);

console.log(allsum - inputsum);