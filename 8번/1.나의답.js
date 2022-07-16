

//배열의 평균
// 배열의 전체 값을 다합치자 reduce ok
// 배열의 들어있는 값의 갯수ok  를 나누면 평균이다.



//reduce함수를 사용하여 배열의 합계를 한번에 구하고
// 전체 배열을 숫자로 나누어평균을 구하였다.

function solution(arr) {
  const result = arr.reduce(function add(sum, currValue) {
    return sum + currValue;
  }); //배열의 합계를 구한다.
  //0을 하는 이유는 빈배열일 경우 null을 발생시켜 함수에 오류를 발생시킬수도 있기 때문
  //예시 []인경우

  const average = result / arr.length;
  return average;
}

// 다른방식의 문제 풀이 코드들
//반복문을 사용하여 푼것들
// 배열과 관련된 문제는 배열[0]위치를 나타내는 요소를 고려해서 해결해 본다.

function solution(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i]; //배열의 0번부터 포함갯수까지 하나하나 더한다.
  }
  const average = sum / arr.length;
  return average;
}
