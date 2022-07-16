function solution(price, money, count) {
  var answer = 0;
  var use = 0;
  for (var i = 0; i < count+1; i++) {
    use += price * i;
    //이용금액을 반복문을 이용하여 구한다.
  }
return result = money > use ? 0 : use - money;
//사용금액이 가지고있는 금액보다 적을때는 0이라는 조건을 
//삼항 조건문으로 표현
}


price 100

count 4

100(100*1) +200(100*2)+300(100*3)+400(100*4)