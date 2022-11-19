function solution(strings, n) {
  let answer = strings.sort((a, b) => {
     if(a[n] > b[n]) return 1;
      if(a[n] < b[n]) return -1;
      //내림차순으로 하기위에 뒤에값 b가 클때를 음수를 준다.
      if(a[n] === b[n]){
          if(a>b) return 1;
          if(a<b) return -1;
          //내림차순으로 하기위에 뒤에값 b가 클때를 음수를 준다.
          return 0;
      }
  });
  
  return answer;
}


let answer = stirngs.srot((a,b)=>{
  if(a[n]>b[n]) return 1;
  if(a[n]<b[n]) return -1;
  if(a[n] === b[n]){
    if(a<b) return 1;
    if(a>b) return 1;
    return 0;
  }

})


//문자열비교
//문자열 오름차순
//문자열 내림차순

// a,b,c,..내림차순
// z,y,x..오름차순
console.log(answer)
console.log('a' <'b')//true
console.log('ab' <'ac')//true
console.log('ab' >'ac')//false


localCompare()
기준 문자열과 비교했을 때 비교 대상 문자열이 정렬상 전에 오는지, 
후에 오는지 혹은 같은 순서에 배치되는지를 알려주는 숫자를 리턴


function solution(strings, n) {
  // strings 배열
  // n 번째 문자열 비교
  return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}

// "a"는 "c"의 앞에 오기 때문에 음수 값을 리턴
'a'.localeCompare('c'); // -2 or -1 (or some other negative value)

//알파벳 순으로 "check"는 "against"의 뒤에 오기 때문에 양수 값을 리턴
'check'.localeCompare('against'); // 2 or 1 (or some other positive value)

// "a"는 "a"와 같기 때문에 0
'a'.localeCompare('a'); // 0