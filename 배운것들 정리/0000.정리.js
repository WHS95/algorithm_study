//문자열에서 문자 또는 단어 추출시 사용하는 메소드-----------------------------------------------
charAt()
substring()
substr()
slice()
split()
정규식또한 고려가능

//slice 예시-----------------------------------------------
const arr = ['a', 'b', 'c', 'd'];
const arr1 = arr.slice(1, 3); // [ 'b', 'c' ]
const arr2 = arr.slice(1); // ['b', 'c', 'd']
const arr3 = arr.slice(-3, -1); // ['b', 'c'] 

//substr과 substring의 차이점-----------------------------------------------
let c = 'asdef'
console.log(c.substring(0,1))//a
console.log(c.substring(1,3))//sd
console.log(c.substring(0))//asd


console.log(c.substr(0,1))//a
console.log(c.substr(2.5,3))//def
console.log(c.substr(2,3))//def
console.log(c.substr(0))//asd


// substr에 밑줄이 가있는 이유
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/substr

//짝수 홀수 구분법-----------------------------------------------
(i%2 === 0) //이 조건이면 짝수이다.
(i%2 !== 0) //이 조건이면 홀수이다.

//math 메소드 정리-----------------------------------------------
Math.floor();//내림
Math.ceil(); //올림
Math.round(); //반올림
Math.max(); //최댓값
Math.min(); //최솟값
Math.abs(); //절댓값

//소수점 자리수에서 반올림-----------------------------------------------
const num1 = 1.1234;
const num2 = 12.5678;
const num3 = 123.5678;
console.log(num1.toFixed(2));   // 1.12
console.log(num2.toFixed(2));   // 12.57
console.log(num3.toFixed(2));   // 123.57


//템플릿 리터럴(백틱 $)-----------------------------------------------
let day_in = `2016-${a}-${b}`;


//reduce-----------------------------------------------
//reduce(acc(합쳐주는것),(현재값),index(현재인덱스)
let a = [3, 2, 6];
let b = [1, 3, 5];
function solution(a, b) {
    var answer = a.reduce((acc, cur, idx) => acc += cur*b[idx],0)


//숫자배열의 전체 합(reduce)-----------------------------------------------
arr.reduce((a, b) => a + b)

//배열 오름 차순, 내림차순-----------------------------------------------
answer = result.sort((a, b) => a - b);//오름차순
answer = result.sort((a, b) => b - a);//내림차순
answer = result.sort();//내림차순

//문자열 오름차순 내림차순-----------------------------------------------
  // a,b,c,..내림차순
  // z,y,x..오름차순
  console.log(answer)
  console.log('a' <'b')//true
  console.log('ab' <'ac')//true
  console.log('ab' >'ac')//false
  
  
  // localCompare()-----------------------------------------------
  기준 문자열과 비교했을 때 비교 대상 문자열이 정렬상 전에 오는지, 
  후에 오는지 혹은 같은 순서에 배치되는지를 알려주는 숫자를 리턴
  
  
  function solution(strings, n) {
    // strings 배열
    // n 번째 문자열 비교
    return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
  }
  //sort 함수에서는 음수값먼저 오게 한다.
  // "a"는 "c"의 앞에 오기 때문에 음수 값을 리턴
  'a'.localeCompare('c'); // -2 or -1 (or some other negative value)
  
  //알파벳 순으로 "check"는 "against"의 뒤에 오기 때문에 양수 값을 리턴
  'check'.localeCompare('against'); // 2 or 1 (or some other positive value)
  
  // "a"는 "a"와 같기 때문에 0
  'a'.localeCompare('a'); // 0

//배열 합치는 방법-----------------------------------------------
//cocat사용
let firstNumbers = [1, 2, 3];
let secondNumbers = [4, 5, 6];
let merged = firstNumbers.concat(secondNumbers);
console.log(merged); // [1, 2, 3, 4, 5, 6]

//전게연산자(...arr)(spread operator)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
const newArr = [
  // [1, 2, 3, 4, 5, 6, 7, 8, 9]
  ...arr1,
  ...arr2,
  ...arr3
];//1,2,3,4,5,6,7,8,9

//push사용
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push(...arr2);


//배열을 문자열로 바꾸는법-----------------------------------------------
join()
toString()

//문자열 배열로 바꾸는법-----------------------------------------------
1)스프레드 연산자 사용(...)
const str = 'hello';
const arr = [...str];
console.log(Array.isArray(arr));
console.log(arr);//[ 'h', 'e', 'l', 'l', 'o' ]

2)split() 사용
const str = 'hello world javascript';
const arr = str.split(' ');
console.log(Array.isArray(arr));
console.log(arr);//[ 'hello', 'world', 'javascript' ]

//배열 요소 추가방법-----------------------------------------------
arr.push()//배열뒷쪽에 요소 추가
arr.unshift()//배열앞쪽에 요소 추가

arr.splice()//배열에 원하는 인덱스 쪽에 요소 추가
var arr = ['a', 'b', 'c'];
// arr = ['a', 'b', 'd', 'c']
arr.splice(2, 0, 'd'); // index 2 ('c')의 위치에 요소를 추가
// arr = ['a', 'b', 'd', 'c', 'e', 'f']
arr.splice(4, 0, 'e', 'f'); // index 4의 위치에 2개의 요소를 추가


//배열 요소 삭제방법-----------------------------------------------
arr.pop()//배열 마지막 값 삭제
arr.shift()//배열 첫번쨰 요소 삭제

arr.splice()//배열에서 원하는 부분 삭제
var arr = ['a', 'b', 'c', 'e', 'f'];
// arr = ['a', 'b', 'e', 'f']
arr.splice(2, 1); // index 2 부터 1개의 요소('c')를 제거
// arr = ['a', 'f']
arr.splice(1, 2); // index 1 부터 2개의 요소('b', 'e')를 제거
// arr = ['a']
removed = arr.splice(1, 1); // 제거한 요소를 반환 받을 수 있음

//문자열을 실수 또는 정수로 바꾸는법-----------------------------
parseInt() - 문자열을 정수로 바꾸는 함수입니다.
parseInt( string, n )-n진법일때의 값으로 변경한다.

parseFloat( string )-문자열을 실수로 바꾸는 함수입니다.

//진법을 변환하는 방법 ------------------------------
var value = 10;
// 10진법 -> 2, 8, 16 진법으로 변환
value.toString(2);    // 1010
value.toString(8);    // 12
value.toString(16);   // a

var bin = 1010,
    oct = 12,
    hex = 'a';
// 2, 8, 16 진법 -> 10진법으로 변환
Number.parseInt(bin, 2);    // 10
Number.parseInt(oct, 8);    // 10
Number.parseInt(hex, 16);   // 10


//스프레드 연산자(...)------------------------------------
//https://paperblock.tistory.com/62


//값이 정수인지 실수인지 체크하는법------------------------------------
Number.isInteger(10)); // true
Number.isInteger(0)); // true
Number.isInteger(-10)); // true
Number.isInteger(123.1)); // false

function isInteger(number)  {
    return number % 1 === 0;
  }


//배열 값을 정렬 할때 -------------------------------
sort 메소드 정리
// https://hianna.tistory.com/409
