const clothes = [
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
];



//나의 답=====================================
function solution(clothes) {
  //조합기능을 가진 함수 nCr = n!/(n-r)!r!
  function getCombinations(n, r) {
    if (r === 0 || n === 1) {
      return 1;
    } else {
      function factorial(num) {
        if (num < 2) {
          return num;
        } else {
          return num !== 1 ? num * factorial(num - 1) : 1;
        }
      }
      let molecule = factorial(n);
      let denominator = factorial(n - r) * factorial(r);
      return molecule / denominator;
    }
  }
  //종류별 갯수가 담긴 obj 제작 함수
  //{ kind1: 2, kind2: 1 }
  function getkindCountObj(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
      obj[clothes[i][1]] = (obj[clothes[i][1]] || 0) + 1;
    }
    return obj;
  }

  const kindCountObj = getkindCountObj(clothes); // { headgear: 2, eyewear: 1 }
  const kindCountObjKey = Object.keys(kindCountObj); // [ 'headgear', 'eyewear' ]
  const kindCountObjValue = Object.values(kindCountObj); // [ 'headgear', 'eyewear' ]
  const kindCount = kindCountObjKey.length; //2

  // hash_table = {종류1: n, 종류2: m, 종류3: k, 종류4: p} 이렇게 주어졌다면
  // (nC1 + nC0) x (mC1 + mC0) x (kC1 + kC0) x (pC1 + pC0) - 1 이 됩니다.
  let result = 1;
  for (let i = 0; i < kindCount; i++) {
    let acc =
      getCombinations(kindCountObjValue[i], 1) +
      getCombinations(kindCountObjValue[i], 0);
    result *= acc;
  }
  return result - 1;
}

console.log(solution(clothes));

