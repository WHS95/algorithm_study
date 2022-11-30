const s = "3people unFollowed me";
const d = "for the last week";

//빈칸을 기준으로 배열화하고 각 배열에서 첫번째 인덱스만 대문자로 변경
//빈칸을 기준으로 배열화

function solution(s) {
  //우선 전체를 소문자화한다.
  let low = s.toLowerCase()
  //띄어쓰기를 기준으로 배열화
  let arr = low.split(" ");
  let result = [];
  let len = arr.length;
  //각 요소별 첫번째만 대문자로변환해준다.
  for (let i = 0; i < len; i++) {
    result.push(arr[i].charAt(0).toUpperCase() + arr[i].substr(1));
  }

  return result.join(" ");
}
console.time("solution");
console.log(solution(s));
console.timeEnd("solution");