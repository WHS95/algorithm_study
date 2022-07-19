function solution(arr) {
  let result = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) result.push(arr[i]);
    //연속된 문자열인 만큼 그다음 배열값과 비교 하여 같지 않으면 그 value를 출력
  }

  return result;
}
