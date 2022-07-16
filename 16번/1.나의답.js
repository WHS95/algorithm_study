//input값을 동일한 타입으로바꾼다.(소문자 upperdowns)
//정산식을 사용하여 요소의 갯수를


//1번째 문제 풀이
let s = "pPpoooyY";

function solution(s) {

    let d = s.toLowerCase(); // 소문자로 변환;
    let pl = d.match(/p/g).length; //p의 갯수 가져오기
    let yl = d.match(/y/g).length; //y의 갯수 가져오기
  
    result = pl === yl ? true : false;
    //p,y의 갯수 비교 값 출력
    return result;
  }
런타임오류 발생.....
  

//2번째 문제 풀이
    let change = s.toLowerCase();
    let check_p = change.split("p").length;
    let check_y = change.split("y").length;
    
   result = check_p == check_y ? true : false;


      console.log(change.split("p"));



//모법예시
//논리연산자를 바로 구현해서 return값에 전달
function numPY(s){
    //함수를 완성하세요
      return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
  }
  
