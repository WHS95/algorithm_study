
var arr1 = [[1,2],[2,3]]
var arr2 = [[3,4],[5,6]]

// var arr3 = [arr1[0][0] + arr2[0][0]]
var arr4 = [arr1[1][1] + arr2[1][1]]

c =arr1.length

console.log([[arr3],[arr4]])
console.log( arr3, arr4)

arr5 = [];
for(let j=0; j<arr1.length; j++){
  arr5[j] =[];
  for(let i=0; i<arr1[j].length; i++){
    arr5.push([arr1[i][j]+arr2[i][j]])
  }
}


  let answer = [];
  
  for(let i = 0; i<arr1.length; i ++){
      let row = [];//Row배열 ->[4,6]
      for(let j = 0; j <arr1[i].length ; j++){
          row.push(arr1[i][j] + arr2[i][j]); //4,6을 만든다.
      }
      answer.push(row); //Row배열을 answer배열안에 넣는다.
  } 
  console.log(answer)


  //모범예시

function sumMatrix(A,B){

    return A.map((a,i) => a.map((b, j) => b + B[i][j]));
}

