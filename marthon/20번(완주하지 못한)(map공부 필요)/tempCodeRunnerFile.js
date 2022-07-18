const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60,
  };
  
  for (let person of testScores) {
    console.log(person); // error!
  }
  
  for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`);
  }