function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    //targetValue 정한다.
    let targetValue = arr[i];
    let j;
    console.log(arr, targetValue + " targetValue");
    for (j = i - 1; j >= 0 && arr[j] > targetValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = targetValue;
  }
  return arr;
}

console.log(insertionSort([7, 3, 2, 8]));
// [ 7, 3, 2, 8 ] 3 targetValue
// [ 3, 7, 2, 8 ] 2 targetValue
// [ 2, 3, 7, 8 ] 8 targetValue
// [ 2, 3, 7, 8 ]
