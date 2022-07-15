let a = 3; //price
let d = 20; //money
let b = 4; //count

var answer = 0;
var use = '';
for (var i = 0; i < 5; i++) {
  use += a * i;
}
let result = d > use ? 0 : use - d;

console.log(result);
//36892
//위와 같은 값이 나온이유는 'var use = ''; use가 문자열로 설정되어있어
// use += a * i; 여기서 use가 문자열로 나옵니다.
//싱글쿼테이션 
