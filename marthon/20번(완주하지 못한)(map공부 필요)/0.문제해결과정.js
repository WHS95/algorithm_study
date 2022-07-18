
let participant	= ["mislav", "stanko", "mislav", "ana"];

let completion = 	["stanko", "ana", "mislav"];

let result =[]
for(i=0; i<completion.length; i++){
  for(j=0; j<participant.length; j++)
    result = completion[i] = participant[j]? 
    result.push(1):0; 
}

console.log(result)
