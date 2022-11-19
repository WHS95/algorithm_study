
let nums = [1,2,3,4];
var answer = 0;
var number=0;
var numbers = [];

for(var i=0;i<nums.length-2;i++){
    for(var j=i+1;j<nums.length-1;j++){
        for(var l=j+1;l<nums.length;l++){
            number=nums[i]+nums[j]+nums[l];
            numbers.push(nums[i]+nums[j]+nums[l]);
            var count=0;
            //나누어질 경우가 2번일 경우에만 소수이다.
            for(var k=1;k<=number;k++){
                if(number%k==0) count++;
                //나누어지는 경우를 카운트
            }
            if(count==2) answer++;
            //나누어진게 2개일경우에 카운트
        }
    }
}
console.log(numbers)


// //소수를 구하는 법 1
// function isPrime(num) {
//   if (num === 2) {
//     return true;
//   }
//   for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
//     if (num % i === 0) {
//       // 한 번이라도 나누어 졌으니 소수가 아니므로 return false
//       return false;
//     }
//   }
//   // 나눠진 수가 없다면 해당 수는 소수이므로 return true
//   return true;
// }


// //소수를 구하는 방법 2
// function isPrime(num) {
//   // 소수는 1과 자기 자신만으로만 나누어 떨어지는 수 임으로
//   // num > i
//   for(let i = 2; num > i; i++) {
//   if(num % i === 0) { //이 부분에서 num이  다른 수로 나눠떨어진다면 소수가 아님
//     return false;
//    }
//   }
//  // 소수는 1보다 큰 정수임으로
//  // 1보다 작으면 false를 리턴한다
//  return num > 1;
// }

//   for(let i = 2; num > i; i++) {
//   if(num % i === 0) { //이 부분에서 num이  다른 수로 나눠떨어진다면 소수가 아님
//     return false;
//    }
//   }
//  // 소수는 1보다 큰 정수임으로
//  // 1보다 작으면 false를 리턴한다
//  return num > 1