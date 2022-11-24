const n = 10;
const lost = [4, 2];
const reserve = [3, 5];

function solution(n, lost, reserve) {
  //본질은 다빌려주었을때 lost가 몇명인가!!
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i + 1];
  }

  //여벌옷을 가져온 아이들
  let moreClothStudent = reserve;

  //잃어버린 아이들
  let lostStudent = lost.sort((a, b) => a - b);

  //여벌옷 가져온 친구중 도난을 당한경우
  const realReserve = moreClothStudent.filter((x) => !lostStudent.includes(x));
  //[ 3, 5 ]

  //여벌옷 가져온 친구들중 아직 안빌려준 친구들에게서 1을 뺴서 만들기
  const addReverse = realReserve.map((e) => e - 1); //[2,4,6]
  const fristLostStudent = lostStudent.filter((x) => !addReverse.includes(x));
  const leftReverseStudent = addReverse.filter((x) => !lostStudent.includes(x));

  //여벌옷 가져온 친구들 1을 더해서 만들기
  const minusReverse = leftReverseStudent.map((e) => e + 2); //[ 4 ]
  const SecondLostStudent = fristLostStudent.filter(
    (x) => !minusReverse.includes(x)
  );
  console.log(fristLostStudent);
  let LostStudentCount = SecondLostStudent.length;
  //결과값 = 전체 학생들 - 최종적으로 못빌린 아이들의 숫자
  return (result = n - LostStudentCount);
}

console.log(solution(n, lost, reserve));
