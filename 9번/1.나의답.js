
let c = "123456"
let b = c.length
let d = '*'.repeat(b-4)+ c.slice(-4)
//slice함수를 통해 뒤에서부터 값을 쉽게 가져올수있다.

console.log(d)


//모범예시
function hide_numbers(s){
  var result = "*".repeat(s.length - 4) + s.slice(-4);

  return result;
}


//정규식을 사용한 모범예시
function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}
