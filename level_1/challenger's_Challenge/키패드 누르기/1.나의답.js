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
      console.log("1,4,7은 왼손");
      answer += "L";
      lefthand = e;
      console.log("anwer:" + answer);
    }
    if (e === 3 || e === 6 || e === 9) {
      console.log("3,6,9은 오른손");
      answer += "R";
      righthand = e;
      console.log("anwer:" + answer);
    } else if (e === 2 || e === 5 || e === 8 || e === 0) {
      //주어진번호에서 오른손,왼손까지의 거리
      const rightlen = len(e, righthand);
      const leftlen = len(e, lefthand);
      const userhand = hand;
      console.log("lefthand " + lefthand);
      console.log("righthand " + righthand);
      console.log("leftlen " + leftlen);
      console.log("rightlen" + rightlen);
      //거리가 같을경우
      if (rightlen === leftlen) {
        console.log("rightlen === leftlen");
        userhand === "left"
          ? ((answer += "L"), (lefthand = e))
          : ((answer += "R"), (righthand = e));
        console.log(answer);
      } else {
        //거리가 같지 않을경우
        rightlen > leftlen
          ? ((answer += "L"), (lefthand = e))
          : ((answer += "R"), (righthand = e));
        console.log("anwer:" + answer);
      }
    }
  }
  return answer;
}
numbers = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
hand = "left";
console.log(solution(numbers, hand));
//LRLLRRLLLRR
//anwer:LRLLRRLLLRR

//0일경우

//0제외
//빼기값이 1면 1자리 차이
//빼기값이 3면 1자리 차이

//빼기값이 2면 2자리 차이
//빼기값이 4면 2자리 차이
//빼기값이 6면 2자리 차이

//빼기값이 5면 3자리 차이
//빼기값이 7면 3자리 차이

//빼기값이 8면 4자리 차이

// /거리 2 로직
// 2일경우 4,8,6
// 5일경우 1,3,7,9,0
// 8일경우 4,6,2,
// 0일경우 5,7,9

//거리 3 로직
// 2일경우 0,7,9
// 5일경우
// 8일경우 1,3
// 0일경우 2,4,6

//거리 4 로직
// 2일경우
// 5일경우
// 8일경우
// 0일경우 1,3

// function len(num, hand) {
//   //거리 1 로직
//   if (num === 2 && (hand === 1 || hand === 3 || hand === 5)) len = 1;
//   if (num === 5 && (hand === 2 || hand === 4 || hand === 6 || hand === 8))
//     len = 1;
//   if (num === 8 && (hand === 5 || hand === 7 || hand === 9 || hand === 0))
//     len = 1;
//   if (num === 0 && hand === 8) len = 1;
//   //거리 2 로직
// }

//거리 1 로직
// 2일경우 1,3,5
// 5일경우 2,4,6,8
// 8일경우 5,7,9,0
// 0일경우 8
