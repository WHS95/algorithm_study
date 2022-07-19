//이상한 문자 만들기

const solution = (s) => {
  // s= "try hello world"라고 가정을 해보겠습니다.
  // string 타입의 값을 분리할 때 split 메서드를 사용합니다.
  // split된 값은 배열안데 각 요소가 됩니다.
  // words = ['try', 'hello', 'world'];
  const words = s.split(' ');

  // words 배열의 각 요소 값을 변경하기 위해서 map함수를 사용합니다.
  // newWords는 map함수에서 return 값을 요소로 할당 받습니다.
  const newWords = words.map((w) => {
      // words 배열의 각 요소(w)의 변형된 값을 저장하기위해 temp를 let으로 선언합니다.
      let temp = ""
      // w의 짝수번째 char은 대문자로 홀수번째 char은 소문자로 변형합니다.
      for(let i = 0; i < w.length; i++){
          if(i%2 === 0) temp += w[i].toUpperCase();
          if(i%2 !== 0) temp += w[i].toLowerCase();
      }
      return temp;
  })

  // 마지막으로 변형된 단어를 요소로 가지는 배열을 string으로 변환하기 위해서 join 메서드를 사용합니다.
  // 각단어는 한칸씩 띄어져있어야되기 때문에 join 파라미터안에 한칸 띈 string 값을 넣어줍니다.
  const answer = newWords.join(' ')

 return answer;
}
[ 'Hello', ' World', ' Javascript' ]