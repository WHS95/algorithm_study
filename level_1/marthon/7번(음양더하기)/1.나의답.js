function solution(absolutes, signs) {
  var sum = [];
for (i = 0; i < absolutes.length; i++) {
  //true는 사칙연산에서 1이여서 무시하고 false는 nan을 일으키기에
  //false만 -1로 바꾸는 작업을 진행
  b[i]==false ? b[i] = -1 :b[i] = 1

}
for (i = 0; i < absolutes.length; i++) {
  //absolutes, signs의 배열을 같은 인덱스끼리 곱한결과를 sum 배열에 부여
  sum[sum.length] = absolutes[i] * signs[i];
}
return result = sum.reduce((a, b) => a + b, 0);
//  SUM 배열 전체를 reduce함수를 이용하여 더해준다.
}


//모범예시
//reduce안에 삼항연사자를 통해 해결
//회고 간단한 if문 경우 화살표 함수를 사용하자.
function solution(absolutes, signs) {

    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}


function solution(absolutes, signs) {
  var c = 0
  for( i = 0 ; i < absolutes.length; i++){  
     var si = signs[i] == true ? 1 : -1;
     // if (signs[i] == true){
     //     var si = 1
     // }else{
     //     var si = -1
     // }
     result = absolutes[i]*si
     c += result
     }   
  return c