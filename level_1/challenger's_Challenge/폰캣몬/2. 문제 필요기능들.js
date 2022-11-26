//중복된 배열 제거 함수 와 효율
// filter: 0.041ms
// forEach: 0.023ms
// set: 0.013ms  <=====

const dupArr = [1, 2, 3, 1, 2];

function forEach(params) {
  let uniqueArr = [];
  params.forEach((element) => {
    if (!uniqueArr.includes(element)) {
      uniqueArr.push(element);
    }
  });
  return uniqueArr;
}

function filter(params) {
  const uniqueArr = params.filter((element, index) => {
    return params.indexOf(element) === index;
  });
  return uniqueArr;
}

function set(params) {
  const set = new Set(params);
  return [...set];
}

console.time("filter");
filter(dupArr);
console.timeEnd("filter");

console.time("forEach");
forEach(dupArr);
console.timeEnd("forEach");

console.time("set");
set(dupArr);
console.timeEnd("set");
