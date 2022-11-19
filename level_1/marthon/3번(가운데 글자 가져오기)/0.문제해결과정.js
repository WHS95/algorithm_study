// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.
// 입출력 예
// s	return
// "abcde"	"c"
// "qwer"	"we"



// 1)문자의 일부를 가져오는 js 기능을 파악한다.

// 2) 구글링 결과 substr 이라는 기능을 파악하게됢

// const str = 'Mozilla';

// console.log(str.substring(1, 3));
// // expected output: "oz"

// console.log(str.substring(2));
// // expected output: "zilla"

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

// // 3)가져올 문자 위치와 가져올 문자수가 필요함

// // 4)문자 수를 파악하는 기능이 필요함

// // 5)문자열길이 갯수를 파악하기위해서 length 를 이용하기로 결정

var string = "안녕하세요";
console.log(string.length);

//6)문자열이 짝수 홀수인지에따른 구분이 필요함 그렇기에 2로 나눴을때 
// 나머지값이 0이냐 아니냐로 구분을 해야함 "%"을 사용

console.log(13 % 5);
// expected output: 3

console.log(-13 % 5);
// expected output: -3

console.log(4 % 2);
// expected output: 0

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Remainder


// //홀수갯수의 문자열경우
// const wer = 'abcef';
// console.log(wer.length);//3
// const a = wer.length/2//1.5
// const b = Math.ceil(wer.length/2)//2
// const c = Math.ceil(wer.length/2)-1//2
// // const c = Math.floor(wer.length/2)//1
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(wer.substring(b, c));


//짝수갯수의 문자열경우
const wer = 'abcdef';
console.log(wer.length);//4
const e = wer.length/3//1.333
const f = Math.floor(wer.length/3)//1
const g = Math.floor(wer.length/3)+2
// const g = Math.ceil(wer.length/3)+1//3

console.log(e)
console.log(f)
console.log(g)
console.log(wer.substring(f, g));



