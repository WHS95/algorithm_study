

function solution(n) {
  let arr = n.toString().split("");
  //숫자열을 문자열로 바꾼후 배열화한다.
  let result = Number(arr.sort((a, b) => b - a).join(""));
  //배열을 내림차순으로 바꾼후 문자열로 변경후 
  //Number로 숫자열로 최종적으로 내보낸다.
  return result;
}


//다른사람 풀이

function solution(n) {
    // 문자풀이
    return parseInt((n+"").split("").sort().reverse().join(""));
}
//sort를 기본적으로 적용해서 오름차순을 한후 그것을 reverse를 사용하여 역순화 하여
//오름차순으로 만들었다.