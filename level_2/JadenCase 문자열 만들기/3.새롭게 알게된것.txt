//obj객체에서 맨 앞에 글자만가져오기 효율체크
let c = 'asdf';

console.time("substring");
console.log(c.substring(0,1)); //a
console.timeEnd("substring");//4.535ms

console.time("slice");
console.log(c.slice(0,1)); //a
console.timeEnd("slice");//0.027ms

console.time("chartAt");
console.log(c.charAt(0)); //a
console.timeEnd("chartAt");//0.015ms

console.time("substr");
console.log(c.substr(0,1)); //a
console.timeEnd("substr");//0.015ms

