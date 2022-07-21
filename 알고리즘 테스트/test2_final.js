function solution(n) {
    const arr = n.toString().split("").reverse(); //[ '3', '5', '2', '8', '1', '7' ]
    const numarr = arr.map(Number);//[ 3, 5, 2, 8, 1, 7 ]
    const sum = numarr.reduce((a, b) => a + b); //26
    const strarr = arr.join("+"); //3+5+2+8+1+7
    const result = `${strarr}=${sum}`;//3+5+2+8+1+7=26
  return result;
}
console.log(solution(718253));