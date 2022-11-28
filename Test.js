function solution(numbers, hand) {
  let lefthand = "*";
  let righthand = "#";
  let answer = "";

  function len(num, hand) {
    //hand와 num이 0인경우
    let lenZero = Math.abs(num - hand);
    if (hand === 0 || num === 0) {
      if (lenZero === 5 || lenZero === 7 || lenZero === 9) return 2;
      if (lenZero === 2 || lenZero === 4 || lenZero === 6) return 3;
      if (lenZero === 1 || lenZero === 3) return 4;
      return 1;
    } else {
      //num이 0이 아닐경우
      const phoneNum = [0, 8, 5, 2];
      let justSub = Math.abs(num - hand);
      if (hand === "*" || hand === "#") {
        return phoneNum.indexOf(num) + 1;
      }
      if (justSub === 1 || justSub === 3) return 1;
      if (justSub === 2 || justSub === 4 || justSub === 6) return 2;
      if (justSub === 5 || justSub === 7) return 3;
      if (justSub === 8) return 4;
    }
  }

  for (let e of numbers) {
    console.log(e);
    if (e === 1 || e === 4 || e === 7) {
      answer += "L";
      lefthand = e;
    }
    if (e === 3 || e === 6 || e === 9) {
      answer += "R";
      righthand = e;
    } else if (e === 2 || e === 5 || e === 8 || e === 0) {
      //주어진번호에서 오른손,왼손까지의 거리
      const rightlen = len(e, righthand);
      const leftlen = len(e, lefthand);
      const userhand = hand;

      //거리가 같을경우
      if (rightlen === leftlen) {
        userhand === "left"
          ? ((answer += "L"), (lefthand = e))
          : ((answer += "R"), (righthand = e));
      } else {
        //거리가 같지 않을경우
        rightlen > leftlen
          ? ((answer += "L"), (lefthand = e))
          : ((answer += "R"), (righthand = e));
      }
    }
  }
  return answer;
}
numbers = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
hand = "left";
console.log(solution(numbers, hand));
