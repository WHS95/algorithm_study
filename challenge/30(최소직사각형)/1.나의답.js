function solution(sizes) {
  const lower = [];
  const higher = [];
  sizes.map(([a, b]) => {
    //map메소드를 이용하여 전체 배열에 function을 적용
    if (a > b) {
      higher.push(a);
      lower.push(b);
    } else {
      lower.push(a);
      higher.push(b);
    }
    //[a,b]a,b의 대소를 비교하여
    //큰 값은 higjer에 작은값은 lower에 배열로 담아둔다.
  });
  let result = Math.max(...higher) * Math.max(...lower);
  return result;
}

//다른사람의 답안
function solution(sizes) {
  // 가로,세로 상관없이 큰값을 a ,작은값을 b
  // a 중 가장큰값을 고르고 b중 가장큰값을 구해서
  // a*b를 해준다
  var a = []; //길이 긴것들 모음
  var b = []; //길이 짧은것들 모음
  for (i = 0; i < sizes.length; i++) {
    a.push(Math.max(sizes[i][0], sizes[i][1]));
    b.push(Math.min(sizes[i][0], sizes[i][1]));
  }
  answer =
    a.reduce((a, b) => (a > b ? a : b)) * b.reduce((a, b) => (a > b ? a : b));

  return answer;
}

//다른사람의 답안
function solution(sizes) {
  const rotated = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));

  let maxSize = [0, 0];
  rotated.forEach(([w, h]) => {
    if (w > maxSize[0]) maxSize[0] = w;
    if (h > maxSize[1]) maxSize[1] = h;
  });
  return maxSize[0] * maxSize[1];
}
