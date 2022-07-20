function solution(s, n) {
  let abc = "abcdefghijklmnopqrstuvwsyz";
  //알파벳의 개수는 26개이다.
  let Abc = abc.toUpperCase();
  let result = [];
  var answer = "";

  let abcarr = abc.split(""); //['a', 'b', 'c',..'z']
  let ABCarr = Abc.split("");//['A','B',...'Z']
  let arr = ["", ...abcarr, ...ABCarr]; //['','a','b',..'z','A','B',..,'Z']
  let sarr = s.split(""); //[A,B]

  for (i = 0; i < s.length; i++) {
    let text = sarr[i]
    index = arr.indexOf(text);
    console.log(index);
    if (index == -1) result.push(" ");
    //공백은 ' '으로 도출
    else if (index > 26) result.push(arr[((index + n) % 26) + 26]);
    //대문자의 범위가 들어올경우 n값이 더해진 index값도 대문자열에서 돌아가게만들기
    else result.push(arr[(index + n) % 26]);
  }
  answer = result.join("");

  return answer;
}
