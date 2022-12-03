// 다른사람의 답 ================================
// https://onlydev.tistory.com/87

const clothes = [
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
];

function solution(clothes) {
  // 예제 1번처럼 입을 수 있는 2가지의 의상 종류(headgear, eyewear)가 있다고 가정해보자.
  // 풀이를 할 때 다음과 같은 경우를 고려해야한다.
  // 해당 종류의 옷을 입지 않고 다른 종류의 옷을 입은 경우 - 기본값 1
  // 해당 종류의 옷을 입었을 경우 - 값 +1 올리기
  // 해당 종류의 다른 옷을 입었을 경우 - 값 + 1 올리기
  var answer = 1;
  var obj = {};
  for (var i = 0; i < clothes.length; i++) {
    obj[clothes[i][1]] = (obj[clothes[i][1]] || 0) + 1;
  }
  // 빈 객체(obj)를 생성한다.
  
  // clothes 배열을 돌면서 의상의 종류를 key로,
  // 의상 종류에 포함되는 옷의 개수를 value로 하는 프로퍼티를 obj에 할당한다.

  // 1번처럼 해당 종류의 옷을 입지 않았을 경우, 기본 값을 1로 한다.
  // (obj[clothes[i][1]]가 undefined일 경우 1)

  // 2, 3번처럼 해당 종류의 옷(또는 해당 종류의 다른 옷)을 입으면 value를 +1씩 올려준다.

  for (var key in obj) {
    answer *= obj[key];
  }

  return answer - 1;
  // 위 return answer - 1;에서 -1을 해준 이유는 의상을 모두 입지 않은 경우를 제외한 것이다.
}

console.log(solution(clothes));
