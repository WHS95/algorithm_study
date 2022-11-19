let n = 11837;

//숫자열을 문자열로 바꾸고 배열화 한다.
let arr = n.toString().split('');
console.log(arr)
// [ '1', '1', '8', '3', '7' ]

//내림차순으로 정렬한다.
let down = arr.sort((a,b) => b-a);
console.log(down)
// [ '8', '7', '3', '1', '1' ]

//배열을 다시 숫자열로 내보낸다.
let result = Number(down.join(''));
console.log(result)
// 87311 