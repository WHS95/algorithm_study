// function solution(absolutes, signs) {

//     const length = absolutes.length
//     console.log(length);
//     let sum = 0;
//     for(let i = 0 ; i <=length; i++){
//         let plus = signs[i]?1:-1
//         sum += absolutes[i]*plus
//     }
//     return console.log(sum);
// }

let absolutes = [4, 7, 12];
let signs = [true, false, true];

const length = absolutes.length;
console.log(length);
let sum = 0;
for (let i = 0; i < length; i++) {
  let plus = signs[i] ? 1 : -1;
  sum += Number(absolutes[i]) * plus;
  console.log(sum);
}


