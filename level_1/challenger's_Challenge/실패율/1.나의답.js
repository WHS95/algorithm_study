function solution(N, stages) {
  //스테이지별 실패율을 구한다.
  let per = [];
  let challenger = stages.length;
  for (let i = 1; i <= N; i++) {
    let count = 0;
    //스테이지별 실패자를 구하여 count로 반영
    for (let j = 0; j < stages.length; j++) {
      if (i === stages[j]) count += 1;
    }
    //실패율 = 실패/도전자
    per.push(count / challenger);
    //스테이지별 실패하면 그다음 스테이지에서 도전할수있는 사람의 숫자가 제외된다.
    challenger -= count;
  }
  //스테이지별 실패율을 담은 배열로 만든다.
  const stagePerArr = per.map((a, b) => {
    return [b + 1, a];
  });
  //실패율을 기준으로 내림차순으로 정렬한다.
  //[ [ 0, 0.125 ], ... ]
  let stagePerArrSorted = stagePerArr.sort((a, b) => b[1] - a[1]);
  let result = stagePerArrSorted.map((a) => a[0]);
  return result;
}

//다른사람의 풀이
function solution(N, stages) {
    let result = [];
    for(let i=1; i<=N; i++){
        let reach = stages.filter((x) => x >= i).length;
        let curr = stages.filter((x) => x === i).length;
        result.push([i, curr/reach]);
    }
    result.sort((a,b) => b[1] - a[1]);
    return result.map((x) => x[0]);
}





//일단 전체 도전자수를 구한다.

//도전중인 스테이지상태를 파악한다.
//스테이지 종류 + 도전자수 파악필요
// const result = {};
// let resutlArr = [];
// stages.forEach((x) => {
//   result[x] = (result[x] || 0) + 1;
// });
// console.log(result);

// for (let key in result) {
//   resutlArr.push(result[key] / challenger);
// }
// console.log(resutlArr);

//실패율을 기준으로 스테이지를 내림차순화한다.
