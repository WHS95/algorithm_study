function solution(numbers) {
  var result = [];
  var answer = [];
  var final = [];
  for (i = 0; i < numbers.length - 1; i++) {
    for (j = 1; j < numbers.length; j++) {
      if (i != j) result.push(numbers[i] + numbers[j]);
    }
    //인덱스별로 덧셈
  }
  answer = result.sort((a, b) => a - b);
  //데이터 오름차순으로 정리
  for (i = 0; i < answer.length; i++) {
    if (answer[i] !== answer[i + 1]) final.push(answer[i]);
  }
  //중복 값들 제거
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
