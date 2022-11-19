let a =[1, 2, 3, 4, 5];
let b =[2, 1, 2, 3, 2, 4, 2, 5];
let c =[3, 3, 1, 1, 2, 2, 4, 4, 5, 5];1



let answer = [1,2,3,4,5];
let count_a =0;
let count_b =0;
let count_c =0;

//답이랑 학생들의 값을 빼서 0이면 답 아니면 틀림

for(i=0; i < answer.length; i++){
    if((answer[i]-a[i%5])=== 0)count_a++
    if((answer[i]-b[i%8])=== 0)count_b++
    if((answer[i]-c[i%10])=== 0)count_c++
}

let testresult = [count_a,count_b,count_c]

const end = [];
const maxValue = Math.max(...testresult);
let index = 0;
for (let i = 0; i < 3; i++) {
  if (maxValue === testresult[i]) {
    end[index] = i + 1;
    index++;
  }
}


console.log(testresult)
console.log(maxValue)
console.log(end)