function solution(s, n) {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var answer = "";

  for (var i = 0; i < s.length; i++) {
    var text = s[i];
    if (text == " ") {
      answer += " ";
      //공백의 경우는 공백 그대로 answer문자열에 담는다.
      continue;
    }
    var textArr = upper.includes(text) ? upper : lower;
    //대문자 배열을 쓸지 소문자 배열을 쓸지 선택
    var index = textArr.indexOf(text) + n;
    //n값이 더해진 인덱스의 위치파악
    if (index >= textArr.length) index -= textArr.length;
    //더해진 인덱스 값이 배열인덱스 값보다 클경우
    //더해진 인덱스 값에서 배열값에서 뺸다.
    answer += textArr[index];
    //정해진 배열에서의 최종 인덱스 값을 지정해서 answer문자열에 담는다.
  }
  return answer;
}

//다른사람의 답안
//아스키 코드를 이용한답안
let s ="a c D";
let n = 1;
function solution(s, n) {
  return s
    .split("")
    //인풋된 문자열을 배열로 변경한다.['a','','c','','D'];
    .map((el) => {
      if (el == " ") {
        return el;
      }
      //공백의 경우는 공백 그대로 배열에 담는다.
      const tmp = el.charCodeAt();
      //아스키 코드로 a의 값을 유니코드로 바꾼다.
      return el.toUpperCase().charCodeAt() + n > 90?
       String.fromCharCode(tmp + n - 26): //배열을 넘는경우
       String.fromCharCode(tmp + n);//배열을 넘지 않는경우
    })
    .join("");//['b','','d','','F']->b d F
}
