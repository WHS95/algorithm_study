//배열값에 인덱스 붙여서 출력

const arr = ['zero', 'one', 'two'];

arr.forEach((element, index) => {
  arr[index] = element + index;
});

// 👇️ ['zero0', 'one1', 'two2']
console.log(arr);


//두개의 배열합치기 arrymerge
let firstNumbers = [1, 2, 3];
let secondNumbers = [4, 5, 6];
let merged = firstNumbers.concat(secondNumbers);
console.log(merged); // [1, 2, 3, 4, 5, 6]