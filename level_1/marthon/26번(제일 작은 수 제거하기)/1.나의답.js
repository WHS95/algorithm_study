
function solution(arr)  {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    if(arr.length < 1) arr = [-1];
    return arr;
}

// var result = arr.splice(arr.indexOf(Math.min(...arr)),1)
//위 코드 대로면 result변수에는 가장 작은 값이 담기게 된다.
arr.splice(arr.indexOf(Math.min(...arr)),1);
//위 코드 대로면 result변수에는 가장 작은 값이 제외된 값이나오게 된다.
console.log(arr)
