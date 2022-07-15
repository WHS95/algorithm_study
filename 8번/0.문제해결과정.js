문제 설명
정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

제한사항
arr은 길이 1 이상, 100 이하인 배열입니다.
arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.
입출력 예
arr	return
[1,2,3,4]	2.5
[5,5]	5


1)배열의 평균값을 구하는 기능을 알아봐야 겠다 구글링

reduce라는 함수를 사용하면 배열의 평균값을 구할수있다고 한다.
const arr = [1, 2, 3];

const result = arr.reduce(function add(sum, currValue) {
  return sum + currValue;
}, 0);

const average = result / arr.length;

console.log(average); // 2


const arr = [,1];

const result = arr.reduce(function add(sum, currValue) {
  return sum + currValue;
});

console.log(result); // ERROR