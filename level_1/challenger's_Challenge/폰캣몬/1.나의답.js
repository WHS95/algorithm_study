const num1 = [3, 1, 2, 3]; //2
const num2 = [3, 3, 3, 2, 2, 4]; //3
const num3 = [3, 3, 3, 2, 7, 2]; //2

function solution(nums) {
  //결론 선택지의 종류의 수 최대값을 구하여라
  //선택 할수있는 갯수 파악
  let selectCount = nums.length / 2;
  //중복된것을 제거
  const set = new Set(nums);
  const uniqueArr = [...set];

  //중복제거된 배열의 갯수와 선택uniqueArr할수 있는 갯수를 비교하여 적은값을 리턴
  const typeCount = uniqueArr.length;

  return typeCount <= selectCount ? typeCount : selectCount;
}

console.log(solution(num3));
