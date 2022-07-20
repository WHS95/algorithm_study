

//배열에서의 인덱스 값이용

let arr = 10;
let str = arr.toString();'10'
//숫자를 문자열로
let srtarr = str.split('').map(Number);[1,0]

//문자열을 숫자배열로 변경[1,0]

console.log(srtarr)
console.log(arr)

let sumarr = srtarr.reduce((a,b) =>a+b);[1+0]
//각각의 자릿수의 합
console.log(sumarr)
console.log(arr)

let result = 11%2==0
//하샤드 수
console.log(result)