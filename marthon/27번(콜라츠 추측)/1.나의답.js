
 let num = 1
function solution(num) {
    var answer = 0;
    
    for(var i = 0; i < 500; i++) { // 500번까지만 반복
        if(num != 1) { // 1이 아닌 경우
            num = num % 2 == 0 ? num / 2 : num * 3 + 1; // 계산진행
        } else if(num == 1) { // 1인 경우
            return answer = i; // 현재 횟수를 출력
        }
    }
     answer = -1; // 500번을 실행했지만 return된 값이 없는 경우
}

//다른풀이

function solution(num) {
    var count = 0;

    while (count < 500) {
        if (num === 1) {
            return count;
        }
        count ++;
        num = num % 2 === 0 ? num /2 : num *3 +1;
    }

    return -1;
}
