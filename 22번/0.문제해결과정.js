
const n = 123;

let d = n.toString()// 숫자열을 문자열로 변경

let c = d.split('')// 문자열을 각각 분리


console.log(c);//[ '1', '2', '3' ]

// mapfn 정의 배열의 모든 element를 숫자로 변경합니다.
const numarr = (arg) => Number(arg);

// 배열의 각 element를 숫자로 변경합니다. - map()
const newArr = c.map(numarr);

console.log(newArr);


let sum = newArr.reduce((a,b)=> a+b)

console.log(sum);