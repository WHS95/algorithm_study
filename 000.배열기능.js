const maxValue = Math.max.apply(null, arr)
//배열에서 최댓값을 가져오는 법

const minValue = Math.min.apply(null, arr)
//배열에서 최댓값을 가져오는 법

arr.splice(arr.indexOf(Math.min(...arr)),1);
//배열에서 가장 작은 값을 제외하고 가져오는법

arr.splice(arr.indexOf(Math.max(...arr)),1);
//배열에서 가장 큰 값을 제외하고 가져오는법

arr.pop()
//배열에서 가장 마지막 값 삭제하는법

arr.shift()
//배열에서 가장 첫번째 값 삭제하는법

arr.filter()
//배열에서 조건을 충족한 값들만 도출하는 법
const words = [1,2,3,4];
const result = words.filter(word => word > 2);
console.log(result);//4

arr.map()
//배열의 값을 전체적으로 수정하는 법


