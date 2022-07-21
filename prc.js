function solution(n) {
  
    let arr = n.toString().split("").reverse(); //[ '5', '4', '3', '2', '1' ]
    let numarr = n.toString().split("").reverse().map(Number);
    let sum = numarr.reduce((a, b) => a + b); //15
  
    let arr1 = arr.join("+"); //5+4+3+2+1
    let result = `${arr1}=${sum}`;
    return result
  }
  console.log(solution(12345));
  