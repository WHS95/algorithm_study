// 문제 설명
// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

// 제한사항
// 문자열 s의 길이 : 50 이하의 자연수
// 문자열 s는 알파벳으로만 이루어져 있습니다.
// 입출력 예
// s	answer
// "pPoooyY"	true
// "Pyy"	false
// 입출력 예 설명
// 입출력 예 #1
// 'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다.

// 입출력 예 #2
// 'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다.

// ※ 공지 - 2021년 8월 23일 테스트케이스가 추가되었습니다.

// solution.js
// 실행 결과
// 실행 결과가 여기에 표시됩니다.



//input값을 동일한 타입으로바꾼다.(소문자 upperdowns)
//정산식을 사용하여 요소의 갯수를 


let s = "pPoooyY";

let d =s.toLowerCase()// 소문자로 변환;

const p = d.match(/p/g);//정규표현식을 통해서 p,y값을 다가져오기
const y = d.match(/y/g);

console.log(p.length)
console.log(y.length)

let pl = p.length
let yl = y.length

//if문을 통해서 글자길이가 같으면 true/ 아니면 false
// if(pl === yl){
//     console.log(true)
// }else{
//     console.log(false)
// }