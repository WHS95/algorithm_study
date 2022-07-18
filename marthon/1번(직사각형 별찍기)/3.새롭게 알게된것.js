let s = 'asd'

    var answer = '';
    
    if (s.length % 2 == 0 ) { // 짝수일 경우,
        answer = s[s.length / 2 - 1] + s[s.length / 2];
    } else {
        answer = s[Math.floor(s.length/2)]; // 홀수일 경우, 반내림 하기
    }


//문자열에서 하나의 값만 가져올때는 위와같이 []배열 형태처럼해서 가져올수도 있다.
//단 1글자만 가져올수있다.    
console.log(s[0])


// substr과 substring의 차이점

let c = 'asdef'
console.log(c.substring(0,1))//a
console.log(c.substring(1,3))//sd
console.log(c.substring(0))//asd


console.log(c.substr(0,1))//a
console.log(c.substr(2.5,3))//def
console.log(c.substr(2,3))//def
console.log(c.substr(0))//asd


// substr에 밑줄이 가있는 이유
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/substr