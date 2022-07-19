let today = new Date();//오늘날짜 2022-07-19T07:00:42.144Z

let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1; // 월1월은 0으로 표현됨을 주의해야 합니다. (0~11)
let date = today.getDate(); // 날짜(0~31)
let day = today.getDay(); // 요일(일요일이 0, 월요일이1, 토요일이 6으로 표현됩니다.)

let hours = today.getHours(); // 시(0~23)
let minutes = today.getMinutes(); // 분(0~59)
let seconds = today.getSeconds(); // 초(0~59)
let milliseconds = today.getMilliseconds(); // 밀리초(0~999)

today.toLocaleDateString(); //2022. 7. 19.
today.toLocaleTimeString(); //오후 2:51:00
today.toLocaleString(); //2022. 7. 19. 오후 2:51:00
today.toLocaleDateString("en-US"); //7/19/2022 미국 기준 날짜 표시

 console.log(today)

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


