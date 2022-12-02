const n = 15;

//나의답
function solution(n) {
  console.log("실행");
  let acc = 0;
  let count = 1;
  let i = 0;
  let arr = [];
  //어떤 수를 최소 2개 더해서 값이 나와야 하기에
  // 기본적으로 반이상의 수를 식에 적용할 필요없다 생각함
  let len = Math.ceil(n / 2);
  //주어진값을 전부 나열하는 배열 한번 주어진값이 나오면 그값을제외하고 만들면 좋을것같다 생각함
  //배열의 인덱스 요소를 이용하기 위해 배열화 함
  for (let i = 1; i <= len; i++) {
    arr.push(i);
  }
  while (arr.length >= 2) {
    acc += arr[i];
    if (acc === n) {
      //누적된값이 원하는값이 되면 카운터
      count += 1;
    } else if (acc > n) {
      //원하는 값이상이 되면 순서대로 앞에값을 없에고 다른것들도 리셋
      arr.shift();
      acc = 0;
      i = 0;
    } else {
      i += 1;
    }
  }
  return count;
}

console.time("시간");
console.log(solution(15));
console.timeEnd("시간");
//결론 효율성이 떨어진다고 한다. 다른 방법을 찾아봐야할듯
//약간 수학과련 지식이 필요할거 같다.

//문제필요기능에 정리
