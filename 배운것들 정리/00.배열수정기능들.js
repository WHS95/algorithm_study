//push 마지막 index에 데이터 삽입
let myArray = ["hi", "hello", 123, false];

myArray.push("hahahoho"); // 마지막 인덱스에 요소를 추가
console.log(myArray); // ["hi", "hello", 123, false, "hahahoho"]

//------------------------//------------------------//------------------------

//ushift 배열 객체의 가장 앞의 인덱스에 새 데이터를 삽입합니다.
let myArray = ["hi", "hello", 123, false];

myArray.unshift("hahahoho"); // 첫 번째 인덱스에 요소를 추가
console.log(myArray); // ["hahahoho", "hi", "hello", 123, false]

//------------------------//------------------------//------------------------

//slice 원하는 인덱스 구간만큼 잘라서 배열 객체로 가져옮
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sliced = myArray.slice(2, -1);
const sliced2 = myArray.slice(-6, -2);

/* 첫 번째 파라미터 -> start(몇 번째 인덱스부터 잘라낼지 나타냄)
   두 번째 파라미터 -> end (어디까지 잘라낼지 나타냄) */

console.log(myArray); /* [1, 2, 3, 4, 5, 6, 7, 8, 9]
                         기존 배열은 건드리지 않고 그대로 반환 */
console.log(sliced); /* [3, 4, 5, 6, 7, 8]
                         2번 인덱스부터 마지막 인덱스 빼고 를 반환 */
console.log(sliced2); /* [4, 5, 6, 7]
                         3번 인덱스부터 마지막 인덱스 빼고 를 반환 */

//------------------------//------------------------//------------------------

//cocat 2개의 배열을 하나로 합친다.
num1.concat(num2, ["ab", ["c", "d", "e"]]);

const num1 = ["a", "b", "c"];
const num2 = [1, 2, 3];

console.log(num1.concat(num2)); // ["a", "b", "c", 1, 2, 3]
console.log(num1.concat(num2, "hello", false));
// ["a", "b", "c", 1, 2, 3, "hello", false]

//------------------------//------------------------//------------------------
//filter() 기존배열은 건드리지 않으면서 특정조건에 만족하는 값만 모아서 새로운
// 배열을 만들어서 반환
// 주어진 값들이 3보다 큰 수를 가진 값들을 걸러내는 방법
const num = [1, 2, 3, 4, 5];
const result = num.filter((value) => value > 3);

console.log(num); // [1, 2, 3, 4, 5] 원본배열은 변하지 않았음
console.log(result); // [4, 5]

// 점수가 85점 이상인 값을 걸러내는 방법
const testArray = [
  { name: "김학생", score: 100 },
  { name: "박학생", score: 90 },
  { name: "이학생", score: 80 },
];

const result = testArray.filter((x) => x.score > 85);

console.log(result);
/* {name: "김학생", score: 100}, 
  { name: "박학생", score: 90} */

//------------------------//------------------------//------------------------

//splice 배열 객체의 지정데이터를 삭제하고, 그 구간에 새 데이터를 삽입할 수있다.
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var num1 = num.splice(10, 2, 'a', 'b', 'c');

console.log(num); /* [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "a", "b", "c"]
                     splice() 함수를 사용하면 원본 배열인 num이 변경되고, */

console.log(num1); /* [11, 12] 삭제된 요소들의 배열은 num1 변수에 담긴다. */