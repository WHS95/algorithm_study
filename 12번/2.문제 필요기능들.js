
//fuction 함수를 화살표 함수로 변경
//fuction & return을 없에는 함수

var a = function () {
  return new Date()
};

let a = () => {
  return new Date()
};

let aa = () => new Date();

//--------------------------------------
var b = function (a) {
  return a * a
};
let b = (a) => {
  return a * a
};
let bb = a => a * a;

//--------------------------------------
var c = function (a, b) {
  return a + b
};
let c = (a, b) => {
  return a + b
};
let cc = (a, b) => a + b;

//--------------------------------------
var d = function (a, b) {
  console.log( a * b )
}
let d = (a, b) => {
  console.log( a * b )
};

//--------------------------------------



