// 조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다.
// 조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
// 조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.


//2진법으로변환

function solution(n) {
  //주어진 n에서의 1의 갯수를 구하고
  //n의 갯수를 하나씩 늘려서 그것의 2진법상 1의 갯수와 동일한지 체크
  let num = n;
  let jin = String(n.toString(2));
  let oneCount = jin.split("1").length;
  while (true) {
    num += 1;
    let Count = String(num.toString(2)).split("1").length;
    if (oneCount === Count) {
      return num;
    }
  }
}

//다른사람이 푼 방식
//정규표현식을 사용하여 1만 남기는 배열을 더 깔끔하게 만듦
function nextBigNumber(n) {
  var size = n.toString(2).match(/1/g).length;
  while (n++) {
    if (size === n.toString(2).match(/1/g).length) return n;
  }
}




