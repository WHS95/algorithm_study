function solution(n, lost, reserve) {
  // 처음 가능한 학생수 = 전체 학생수 - 체육복 분실한 학생 수
  var answer = n-lost.length;
  
  //여분의 옷이 없이 정말 분실한 학생
  let realLost=lost.filter((l)=>!reserve.includes(l));
  //여분의 옷이 정말 있는 학생
  let realReserve=reserve.filter((r)=>!lost.includes(r));
  //분실을  당했지만 여분의 옷이 있어 수업가능해진 학셍
  answer+=lost.length-realLost.length;
  
  //lost 배열 앞뒤의 값을 reserve에 포함되어있는지를 확인 -> 해당값을 reserve에서 뺌 + answer+
  //정렬 이유 - [4,2], [3,5]와 같은 케이스 때문
  realLost.sort((a,b)=>a-b);

  //문제의 조건 로직
  realLost.forEach((l)=>{
      //정말로 여분의 옷이 있는 학생이 한먕도 없는경우
      if(realReserve.length===0){
          return;
      }
      
      //여분의 옷을 가진 학생 -1
      if(realReserve.includes(l-1)){
          realReserve=realReserve.filter((r)=>r!==l-1);
          answer++;
      }
      //여분의 옷을 가진 학생 +1
      else if(realReserve.includes(l+1)){
          realReserve=realReserve.filter((r)=>r!==l+1);
          answer++;
      }
      
  })
  return answer;
}