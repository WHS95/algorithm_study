//일주일동안 공부한 시간을 구한다.
//체크인 시간과 체크아웃 시간을 빼서 하루의 수업시간을 구한다.
///새벽 5시나 이후 체크 아웃은 21시로 체크아웃한것으로 가정한다.

function solution(arr1, arr2) {
    var result = [];//변수의 타입을 지정
    var answer = 0;//변수의 타입을 지정
  
    for (i = 0; i < arr1.length; i++) {
        //24+5=29새벽 5시는 21시로 변경
        arr2[i] >= 29? result.push(21 - arr1[i]):result.push(arr2[i] - arr1[i]);
    }
    answer = result.reduce((cur, acc) => cur + acc, 0);
    //매일 진행 시간들이 담긴 배열을 합쳐준다.
    return answer;
  }
  let arr1=[9, 9, 9, 9, 7, 9, 8];//체크인 시간
  let arr2=[23, 23, 30, 28, 30, 23, 23];//체크아웃 시간
  console.log(solution(arr1, arr2))

  //유튜브 업로드 위치
  //https://youtu.be/4-0Sm8DeqxE