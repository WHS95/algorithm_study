//map이란??

//배열의 값들을 2배로 만들어 주고싶을때
//반복문 for을 이용할때
const arr = [1,2,3];
const res = [];

for(let i = 0; i < arr.length; i++){
    res.push(arr[i]*2);
}
console.log(res)//[2,4,6]

//map 메소드를 사용하게되면

const res1 = arr.map((value) =>{
    return value*2
});
console.log(res1)//[2,4,6]

const res2 = arr.map((value) => value*2);

console.log(res2)//[2,4,6]

const res3 = arr.map((value,index) => index);

console.log(res3)//[0,1,2]