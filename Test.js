// console.log((10000).toFixed(), typeof (10000).toFixed()); // "10000" "string"
// console.log((10000).toFixed(2), typeof (10000).toFixed(2)); // "10000.00" "string"
// console.log((10000).toFixed(3), typeof (10000).toFixed(8)); // "10000.000" "string"
// console.log((3.14).toFixed(), typeof (3.14).toFixed()); // "3" "string"
// console.log((3.14).toFixed(1), typeof (3.14).toFixed()); // "3.1" "string"
// console.log((3.16).toFixed(1), typeof (3.16).toFixed()); // "3.2" "string"
// console.log(("문자").toFixed(1), typeof (3.16).toFixed()); //TypeError
// console.log(("abc").toFixed(1), typeof (3.16).toFixed()); // TypeError

int num = 10;
char str = "a";

num = str; // ERROR!!
num = "a"; // ERROR!!
str = 10; // ERROR!!
