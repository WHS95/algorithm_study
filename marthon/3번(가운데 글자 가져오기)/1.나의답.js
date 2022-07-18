//1차답안 정확성 56.3 퍼센트로 코드를 좀 더 다듬어야 한다.

function solution(s) {
    var answer = "";
    const num = s.length;
    if (num % 2 == 0) {
      const e = num / 3;
      const f = Math.floor(e);
      answer = s.substring(f, f + 2);
    } else {
      const a = num / 2; 
      const b = Math.ceil(num / 2); 
      answer = s.substring(b, b - 1);// b-1 을 수정해보자 !!
    }
    return answer;
  }

//2차답안 정확성 56.3 퍼센트로 코드를 좀 더 다듬어야 한다.
//substring--> substr로 변경하여 좀더 쉽게 만들었다.
function solution(s) {
    var answer = "";
    const num = s.length;
    if (num % 2 == 0) {
        return(s.substr(num/2 -1,2))
    } else {
      return(s.substr(Math.floor(num/ 2),1))
    }
  }

  //모범예시 코드(삼항연산자를 사용하여 if문을 한줄에 표현)

  function solution(s) {
      return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
  }
  //설명
  //큰틀에서 substr(a,b)가 있으며 b에 대한 값을 삼항연사자로 사용하였다.

//   var x = 100, y = 10;
// var z = x > y ? "x가 y보다 더 크다." : "x가 y보다 더 작다.";
// console.log(z);
  
