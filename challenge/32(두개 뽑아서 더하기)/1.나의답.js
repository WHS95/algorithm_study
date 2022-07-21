function solution(numbers) {
  var result = [];
  var answer = [];
  var final = [];
  for (i = 0; i < numbers.length - 1; i++) {
    for (j = 1; j < numbers.length; j++) {
      if (i != j) result.push(numbers[i] + numbers[j]);
    }
    //인덱스별로 덧셈
    0,1/0,2/1,2
  }
  answer = result.sort((a, b) => a - b);
  //데이터 오름차순으로 정리
  for (i = 0; i < answer.length; i++) {
    if (answer[i] !== answer[i + 1]) final.push(answer[i]);
  }
  //인덱스 별로 덧셈시 중복 값발생
  //각자의 값끼리 비교해서  중복되지 않는값들만 입력
  return final;
}

//다른사람의 답
function solution(numbers) {
  const temp = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      temp.push(numbers[i] + numbers[j]);
    }
  }

  const answer = [...new Set(temp)]; //????

  return answer.sort((a, b) => a - b);
}
