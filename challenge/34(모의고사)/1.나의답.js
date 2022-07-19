function solution(answers) {
    let a = [1, 2, 3, 4, 5];
    let b = [2, 1, 2, 3, 2, 4, 2, 5];
    let c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let count_a = 0;
    let count_b = 0;
    let count_c = 0;
  
    //답이랑 학생들의 값을 빼서 0이면 답 아니면 틀림
    for (i = 0; i < answers.length; i++) {
      if (answers[i] - a[i % 5] === 0) count_a++;
      if (answers[i] - b[i % 8] === 0) count_b++;
      if (answers[i] - c[i % 10] === 0) count_c++;
    }
    //학생들이 맞힌 갯수를 배열화 함
    let testresult = [count_a, count_b, count_c];
  
    const end = [];
    const maxValue = Math.max(...testresult);
    //가장 많이 맞히 갯수를 파악
    let index = 0;
    for (let i = 0; i < 3; i++) {
      if (maxValue === testresult[i]) {
        //학생들이 맞힌갯수와 최대 정답갯수가 같으면 값이 입력
        //값은 1,2,3 순서대로 비교해서 들어가게됢
        end[index] = i + 1;
        index++;
      }
    }
    return end;
  }
  

  //다른 사람의 답
  function solution(answers) {
    var answer = [];
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
    var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
    var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
    var max = Math.max(a1c,a2c,a3c);

    if (a1c === max) {answer.push(1)};
    if (a2c === max) {answer.push(2)};
    if (a3c === max) {answer.push(3)};
    return answer;
}