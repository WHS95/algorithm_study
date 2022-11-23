//나의 풀이
function solution(n) {
  let num = n;
  for (let i = 2; i <= num; i++) {
    if (num % i === 1) return i;
  }
}


//다른사람의 풀이
function solution(n, x = 1) {    
    while (x++) {
        if (n % x === 1) {
            return x;
        }
    }    
}