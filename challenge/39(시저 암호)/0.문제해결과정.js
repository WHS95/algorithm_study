// 알파벳 개수 26개
//배열에서 인덱스를 준비하고
// 들어오는 값이 인덱스에 맞는 숫자열로 변경된후
// 그 숫자배열에 n만큼의 값을 더해준다.
let s = "a b";
let n = 1;
let abc = "abcdefghijklmnopqrstuvwsyz";
let Abc = abc.toUpperCase();
let result = [];

let abcarr = abc.split(""); //['a', 'b', 'c', 'd',
let ABCarr = Abc.split("");
let arr = ["", ...abcarr, ...ABCarr]; //[a,b,..z,A,B,..Z]
console.log(arr);
let sarr = s.split(""); //[A,B]
console.log(sarr);
for (i = 0; i < sarr.length; i++) {
  index = arr.indexOf(sarr[i]);
  console.log(index);
  if (index == -1) {
    result.push(" ");
  } else if (index > 26) {
    result.push(arr[((index + n) % 26) + 26]);
  } else {
    result.push(arr[(index + n) % 26]);
  }
}
// let index = arr.indexOf(sarr[0]); //26

// let result = arr[index + 1]; //B
console.log(result.join(""));
