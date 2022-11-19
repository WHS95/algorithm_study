let strings =["sun", "bed", "car"];
let n = 1;

  let answer = strings.sort((a, b) => {
     if(a[n] > b[n]) return 1;
      if(a[n] < b[n]) return -1;
      if(a[n] === b[n]){
          if(a>b) return 1;
          if(a<b) return -1;
          return 0;
      }
  });
// a,b,c,..내림차순
// z,y,x..오름차순
console.log(answer)
console.log('a' <'b')//true
console.log('ab' <'ac')//true
console.log('ab' >'ac')//false



function solution(strings, n) {
  // strings 배열
  // n 번째 문자열 비교
  return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}