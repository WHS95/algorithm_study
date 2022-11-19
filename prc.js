// var iterable = [3, 5, 7];
// iterable.foo = "hello";

// for (var key in iterable) {
//   console.log(key); // 0, 1, 2, "foo", "arrCustom", "objCustom"
// }

// for (var value of iterable) {
//   console.log(value); // 3, 5, 7
// }

const person = { fname: "John", lname: "Doe", age: 25 };

let txt = "";
//object에서 키값을 가져온다.
for (let x in person) {
  txt += person[x] + " ";
}

console.log(txt);



// const numbers = [45, 4, 9, 16, 25];

// let txt1 = "";
// //배열에서는 인덱스 값을 가져 온다.
// for (let x in numbers) {
//   txt1 += numbers[x];
// }

// console.log(txt1);



// const object = { 1: "가", 2: "나", 3: "다", 4: "라" };
// for (let z in object) {
//   console.log(object[z]);
// }
