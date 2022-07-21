let arr = ["coke", "water", "glass", "dog", "dog", "yogurt", "vitamin"];
let arrsort = arr.sort();
let n = 2;

let ready = [];
let same = [];
let result = [];
for (i = 0; i < arr.length; i++) {
    if (arrsort[i] === arrsort[i + 1]) same.push(arrsort[i]); //['brush']
    //중복된 값을 찾았다.
     if (arrsort[i] !== arrsort[i + 1]) ready.push(arrsort[i]); 
    //[ 'bed', ', 'car', 'sun' ]
    //중복된 값을 제거할 배열 준비
}

let remove = same.join(); 
//준비된 배열에서 중복값을 뺴기 위해서 문자열로 수정
ready.map((a) => {
  if (a !== remove) {
    result.push(a);
  }
});
//중복된 값을 제외하고 맞는 값만 찾기

//최종정렬
let final = result.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
console.log(final)

// let answer = arr.map((a,b)=>a!== arr[b+1]? arr[b]);
// console.log(answer)

//정렬
// let asdqwe = arr.sort((s1, s) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
// console.log(asdqwe)

//   let answer = strings.sort((a, b) => {
//      if(a[n] > b[n]) return 1;
//       if(a[n] < b[n]) return -1;
//       if(a[n] === b[n]){
//           if(a>b) return 1;
//           if(a<b) return -1;
//           return 0;
//       }
//   });
// // a,b,c,..내림차순
// // z,y,x..오름차순
// console.log(answer)
// console.log('a' <'b')//true
// console.log('ab' <'ac')//true
// console.log('ab' >'ac')//false

// function solution(strings, n) {
//   // strings 배열
//   // n 번째 문자열 비교
//   return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
// }
