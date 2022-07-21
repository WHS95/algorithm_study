function solution(arr, divisor) {
    var result = [];
    for (i = 0; i < arr.length; i++) {
      if (arr[i] % divisor === 0) result.push(arr[i]);
      //arr배열 인덱스 값을 diviso로 나누었을때 나머지가 없는것들만 배열로 다시 부여한다.
      result.sort((a, b) => a - b);
    }
    if (result.length === 0) result.push(-1);
    //result 배열에 인덱스가 아무것도 없을때 length는 0이므로
    //0일경우 -1배열값을 넣어준다.
  
    return result;
  }

//다른 풀이 삼항연산자와 화살표 함수 사용

function solution(arr, divisor) {
    var result = [];
    for (i = 0; i < arr.length; i++) {
      arr[i] % divisor === 0 ? result.push(arr[i]) : []
      //arr배열 인덱스 값을 diviso로 나누었을때 나머지가 없는것들만 배열로 다시 부여한다.
    }
    return result.length < 1? [-1]:result.sort((a, b) => a - b);
  }


//filter 매소드를 사용해서 진행한 풀이

function solution(arr, divisor) {
    var answer = arr.filter(v => v%divisor == 0);
    //배열에 있는값을 divisor로 나누었을때 딱 떨어지면 0이기에 이때 true인값만 배열에 남기겠다.
    return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
}
