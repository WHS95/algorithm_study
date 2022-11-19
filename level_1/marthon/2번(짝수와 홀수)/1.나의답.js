//나의 답안

function solution(num) {
  var answer = '';
  if (num %2===0){
      return "Even"
  }else{
      return "Odd"
  }
  return answer;

}

num %2==0 ? odd 홀수 : even 짝수

4      0 조건이 맞다 false
true
flase

2/2 2나누기 2  1
3%2 3나누기 2를 했을때 몫1 -> 나머지 1 홀수
2%2 2나누기 2를 했을때 몫2 -> 나머지 0 짝수

//핵심
//짝수와 홀수는 2로 나뉘어졌을 때 나머지 값이 1 이냐 0이냐로 구분할수 있냐는 점을 캐치해야함


//참고 레퍼런스
//나머지 mds js
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Remainder