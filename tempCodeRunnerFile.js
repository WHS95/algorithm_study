// -- Looping through charactors of a string

for(let i of "String")
	console.log(i)
  
// --- Looping through key-value paris of a Map  
  
let m = new Map();
m.set("a", 1).set("b", 2);

      zfor(let [i, j] of m)
	console.log(`${i}->${j}`);
  
// --- Looping through elements of an array of arrays

for(let [i, j, k] of [[4,5,6], [1,2,3]])
	console.log(i, j, k);