let participant	= ["mislav", "stanko", "mislav", "ana"];

let completion = 	["stanko", "ana", "mislav"];



// 배열 선언
const arr1 = ["mislav", "stanko", "mislav", "ana"];
const arr2 = ["stanko", "ana", "mislav"];

// 교집합(Intersection)
// console.log(arr1.filter(x => arr2.includes(x)));
// 출처: https://soft91.tistory.com/84 [너와 나의 프로그래밍:티스토리]

// 차집합(Difference)
console.log(arr1.filter(x => !arr2.includes(x)));
// 출처: https://soft91.tistory.com/84 [너와 나의 프로그래밍:티스토리]

// 대칭차집합(Symmetric Difference)
// let difference = arr1
//                  .filter(x => !arr2.includes(x))
//                  .concat(arr2.filter(x => !arr1.includes(x)));
// // console.log(difference);
// 출처: https://soft91.tistory.com/84 [너와 나의 프로그래밍:티스토리]