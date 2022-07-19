let arr =[1,1,3,3,0,1,1]
let result =[];
for(i = 0; i<arr.length; i++){
    if(arr[i]!== arr[i+1])result.push(arr[i])
} 
console.log(result)

//다른사람 풀이

function solution(arr)
{
    return arr.filter((val,index) => val != arr[index+1]);
}