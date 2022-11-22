function solution(array, commands) {
  var answer = [];
  let len = commands.length;
  for (let i = 0; i < len; i++) {
    //명령어집단을 하나씩 하나씩 실행해준다.
    let command = commands[i];
    //command에 담긴 값을 구조분해 할당을 해서 배분한다.
    let [a, b, c] = command;
    const slice = array.slice(a - 1, a + (b - a)).sort((a, b) => a - b);
    //결과값을 answer에 담아준다.
    answer.push(slice[c - 1]);
  }
  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
