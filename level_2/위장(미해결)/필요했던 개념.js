// 이 문제는 조합(combination) 문제입니다.
// nCr = n!/(n-r)!r!

// 문제의 첫번째 예시를 이용하여 설명해 보겠습니다.

// clothes = [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]] 라고 주어져 있죠.
// 이 문제에서 주어진 headgear의 종류는 2개, eyewear의 종류는 1개 입니다. 이걸로 해시테이블을 만들면 다음과 같습니다.

// hash_table = {'headgear': 2, 'eyewear': 1}

// 각 의상 종류별로 1개를 입거나 안입을 수 있습니다.

// 여기서 headgear의 두 종류 중 1개를 선택할 가짓수는 2C1 입니다.
// 그리고 headgear를 아예 안입는 가짓수 역시 2C0 = 1 입니다.
// => headgear 종류를 1개를 입거나 안입을 확률은 2C1 + 2C0 이 됩니다.

// 이어서 eyewear의 한 종류중 1개를 선택할 가짓수는 1C1 입니다.
// 그리고 eyewear를 아예 안입는 가짓수 역시 1C0 = 1 입니다.
// => eyewear 종류를 1개를 입거나 안입을 확률은 1C1 + 1C0 이 됩니다.

// 최종적으로 (2C1 + 2C0) x (1C1 + 1C0) 가 각 의상 종류 중 1개를 입거나 안입을 확률의 조합이 됩니다.

// 여기서 문제의 조건 중에 의상을 최소 1개는 입는다고 했습니다. 그러면 모든 의상 종류를 하나도 안입는 가짓수 1을 최종값에서 빼주면 됩니다.
// => 정답: (2C1 + 2C0) x (1C1 + 1C0) - 1

// 일반화 하자면
// hash_table = {종류1: n, 종류2: m, 종류3: k, 종류4: p} 이렇게 주어졌다면
// (nC1 + nC0) x (mC1 + mC0) x (kC1 + kC0) x (pC1 + pC0) - 1 이 됩니다.

const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 
    // n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1); 
      // 해당하는 fixed를 제외한 나머지 뒤
      const combinations = getCombinations(rest, selectNumber - 1); 
      // 나머지에 대해서 조합을 구한다.
      const attached = combinations.map((el) => [fixed, ...el]); 
      //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
      results.push(...attached); 
      // 배열 spread syntax 로 모두다 push
    });

    return results; // 결과 담긴 results return
}