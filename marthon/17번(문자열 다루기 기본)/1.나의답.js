// function solution(s) {
//   let check = Number(s);
//   if(s.length === 4 || s.length === 6)result = isNaN(check) ? false : true;
//   //check === NaN 연사자는 옳지않은 기준이다.

//   console.log(result);
//   return answer;
// }

//런타임 에러발생
//이유 e 값이 들어가면 e값을 지수로 생각하여 숫자열로 변환되기 때문

let s = "e23"

let answer = isNaN(s) ? false : true; // 모든 요소가 number이면 true리턴

console.log(answer)


//모범예시
function solution(s) {

  if(s.length === 4 || s.length === 6){
      return s.split("").every(c => !isNaN(c)) 
      // every 모든배열 요소 체크를 한다. number이면 true리턴
  } else {
      return false;
  }
}