//배열에서 가장 작은 값을 파악한다.
//가장 작은 값의 인덱스를 파악한다.
//배열 수정(삭졔) 메소드를 이용하여 가장작은 값을 삭제 한다.


let arr = [4,3,2,1];

let min = Math.min(...arr)

console.log(min)
// if(arr[i]=== min){
    
let a = arr.indexOf(1)

console.log(a)

let result = arr.splice(3,1)
//가장 작은 값은 

console.log(result)

