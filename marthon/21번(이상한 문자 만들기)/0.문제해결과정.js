
let s = "try hello world"

let a =s.split(" ");
//s문자열은 " "기준으로 배열화 해준다.

let b = a[0]
//test a배열에서의 첫번째 값을 가져와서 진행

// 모든 배열에 구현하고 수정하기 위해서는 map을 사용하면 좋다.

let result =''
for(let i = 0; i < b.length; i++){
  if(i%2 === 0) result += b[i].toUpperCase();
  //b의 짝수번째(0,2문자열의 번호) 문자열은 대문자로
  if(i%2 !== 0) result += b[i].toLowerCase();
  //b의 홀수번쨰 문자열은 대문자로
}
 
console.log(result)




