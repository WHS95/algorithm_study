function solution(s) {
  let arr = [...s];
  //['Z', 'b', 'c','d', 'e', 'f','g']
  //['Z', 'b', 'c','d', 'e', 'f','g']
  "gfedcbZ"
  let result = arr.sort((a, b) => {
    //대문자는 소문자보다 작은 값을 같고
    //전제적 차순이 오름차순으로 적용하면 문제없이 돌아간다. 판단
    for (i = 0; i < s.length - 1; i++) 
    if (a[i] > b[i]) return -1;
    if (a[i] < b[i]) return 1;
    if (a[i] === [i]) return 0;});
  var answer = result.join("");
  //join메소드를 사용하여 'gfedcbZ'로 변경
  -1 0 1
  return answer;
// }

//다른사람이 푼 방식
function solution(s) {
  return s
    .split("")
    .sort()
    .reverse()
    .join("");
}
