// function solution(s){
//   var answer = true;

//   // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
//   console.log('Hello Javascript')

//   return answer;
// }

const s = "()())(()";
const D = "(()(";

//나의 첫번째답
function solution(s) {
  let len = s.length;
  let answer = 0;
  //조건 전체 갯수는 짝수여야한다.
  if (len % 2 !== 0) return false;
  //조건 처음과 끝은 ( )으로 이루어져야한다.
  if (s.charAt(0) !== "(" || s.slice(-1) !== ")") return false;
  //( = -1, )=+1로 설정 후  0이 되면 true
  //나는 단순히 괄호의 갯수가 짝수가되면 된다고 생각함 여기서 에러 우린 순서가 맞아야함
  //이게 실수한 부분
  for (let i = 0; i < len; i++) {
    if (s[i] === "(") answer += 1;
    if (s[i] === "(") answer -= 1;
  }
  return answer === 0 ? true : false;
}
console.log(solution(s));

//다른사람의 답
function solution(s){ 
  let cnt = 0;
  //'(' 가 먼저 나온 것이 없는데 ')' 이 나왔다면 stackCount가 -1 이 될것 이러면 문제에 취지에 맞지 않으
  for (let i=0; i<s.length; i++) {
      s[i] === "(" ? cnt += 1 : cnt +=  -1 
      if (cnt < 0) {
         return false;
      }
  }
  return cnt === 0 ? true : false
}

