// 배열기능
let a = 5;
let b = 3;

var arr = new Array( a, b );

// 숫자 오름차순으로 배열
arr.sort(function(a, b)  {
    return a - b;
  });

// 큰수에서 작은수 뺴기

console.log(arr[1]-arr[0]);//4

const d = arr[1]-arr[0]

console.log(d);//4

//차이값을 낮은수에 더하기
var sum = 0;
for(var i=arr[0]; i<arr[1]+1; i++) {	
    sum += i;
}

console.log(sum);

// // 숫자 오름차순으로 배열

// var arr = [];

// arr[0] = 7;
// arr[1] = 2;
// arr[2] = 4;

// arr.sort(function(a, b)  {
//     return a - b;
//   });

// var sum = 0;
// for(var i=1; i<11; i++) {	
//     sum += i;
// }


// //--------------------------------

// //배열 데이터
// var items = [
//     { name: 'Edward', value: 21 },
//     { name: 'Sharpe', value: 37 },
//     { name: 'And', value: 45 },
//     { name: 'The', value: -12 },
//     { name: 'Magnetic', value: 13 },
//     { name: 'Zeros', value: 37 }
//   ];
  
//   // value 기준으로 정렬
//   items.sort(function (a, b) {
//     if (a.value > b.value) {
//       return 1;
//     }
//     if (a.value < b.value) {
//       return -1;
//     }
//     // a must be equal to b
//     return 0;
//   });

//   console.log(items);

  
//   // name 기준으로 정렬
//   items.sort(function(a, b) {
//     var nameA = a.name.toUpperCase(); // ignore upper and lowercase
//     var nameB = b.name.toUpperCase(); // ignore upper and lowercase
//     if (nameA < nameB) {
//       return -1;
//     }
//     if (nameA > nameB) {
//       return 1;
//     }
  
//     // 이름이 같을 경우
//     return 0;
//   });

//   console.log(items);