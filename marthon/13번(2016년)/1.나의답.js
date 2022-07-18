let a = 5;
let b = 24;

let dayofweek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
//0을 기준으로 일요일 배열을 만든다.
//getday는 일요일일 경우 0으로 값을 반환하기 때문이다.

let day_in = `2016-${a}-${b}`;
//date형식에 맞춘 입력값을 위해 탬플릿 리터럴 방식으로 변수를 부여하였다.
let result = new Date(day_in).getDay();

console.log(dayofweek[result]);

