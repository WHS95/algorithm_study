// let n = 225;
// let answer = 0;
// let root = Math.sqrt(n);

// // console.log(root)

// if(root%1 === 0){
//     answer = Math.pow(root+1,2)
// }else{
//     answer = -1
// }

// console.log(answer)


let n = 225;

let root = Math.sqrt(n);
//제곱근의 값을 구한다.
let answer = root%1 === 0?Math.pow(root+1,2):-1
//제곱근의 값이 정수면 값+1해서 제곱 
//

console.log(answer)