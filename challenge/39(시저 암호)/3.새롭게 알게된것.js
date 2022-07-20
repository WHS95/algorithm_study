
//아스키 코드
//자바스크립에서 해당문자열의 유니코드를 반환하거나
//유니코드로 해당 문자열을 반환할수 있다.
let s = "abzABZ";

console.log(s.charCodeAt(0));//97
console.log(s.charCodeAt(1));//98
console.log(s.charCodeAt(2));//122
console.log(s.charCodeAt(3));//65
console.log(s.charCodeAt(4));//66
console.log(s.charCodeAt(5));//90
console.log(String.fromCharCode(97));//a
console.log(String.fromCharCode(98));//b
console.log(String.fromCharCode(122));//z
console.log(String.fromCharCode(65));//A
console.log(String.fromCharCode(66));//B
console.log(String.fromCharCode(90));//Z

