//숫자열을 문자열로 바꾸고 배열화 한다.
//내림차순으로 정렬한다.
//배열을 다시 문자열로 내보낸다.


let n = 11837;

let arr = n.toString().split('');

let down = arr.sort((a,b) => b-a);

let result = Number(down.join(''));

console.log(result)
