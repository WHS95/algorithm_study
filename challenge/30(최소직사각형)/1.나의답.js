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
  const rotated = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));

  let maxSize = [0, 0];
  rotated.forEach(([w, h]) => {
    if (w > maxSize[0]) maxSize[0] = w;
    if (h > maxSize[1]) maxSize[1] = h;
  });
  return maxSize[0] * maxSize[1];
}
