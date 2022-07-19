function solution(participant, completion) {
  participant.sort(); //참가자 배열 정렬
  completion.sort(); //완주자 배열 정렬
  for (var i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      //인덱스 0부터 순차적으로 두 배열 비교
      return participant[i];
      //비완주자가 참가자 배열에 나올 경우 출력
    }
  }
}

//다른 사람들 답안
function solution(participant, completion) {
    const map = new Map();

    for(let i = 0; i < participant.length; i++) {
        let a = participant[i], 
            b = completion[i];
        map.set(a, (map.get(a) || 0) + 1);
        map.set(b, (map.get(b) || 0) - 1);
    }
    for(let [k, v] of map) {
        if(v > 0) return k;
    }
    return 'nothing';
}
//https://ko.javascript.info/map-set