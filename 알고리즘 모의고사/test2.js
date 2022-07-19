
//몇일후 날짜를 더하는 법
//setDate(날짜를 변경)
//setMonth(월을 변경)
function solution(month, day){
  var date= new Date(2022,month-1,day);
 date.setDate(date.getDate() +98);
 var date=(date.getMonth()+1)+'월 '+date.getDate()+'일' ;

  return date;
}
console.log(solution(6,22));


