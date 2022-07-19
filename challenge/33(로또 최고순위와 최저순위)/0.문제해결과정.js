let lottos = [44, 1, 0, 0, 31, 25];
let win_nums = 	[31, 10, 45, 1, 6, 19];

let low =0;
var answer =[];
let rank =[6,6,5,4,3,2,1]

//최저 맞춘갯수 파악
for(i=0; i< lottos.length; i++){
    for(j=0; j< lottos.length; j++){
        if(lottos[i]===win_nums[j])low ++
    }
}
//0의 갯수(추가 맞은 갯수) 파악
let add = lottos.filter(element => 0 === element).length;
//맞축개수 순위도출
let lowlevel = rank[low] 
let highlevel = rank[low+add]
//최대 순위, 최저순위 배열로 도출
 answer.push(highlevel)
 answer.push(lowlevel)

console.log(answer)