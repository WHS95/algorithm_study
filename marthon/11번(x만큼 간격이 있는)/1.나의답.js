function solution(x, n) {
    var answer = [];
        for(i = 1; i<n+1; i++){
        answer.push(x*i)}
    //answer 배열에 x값을 i배수값으로 하나씩 입력
    return answer;
}

//for문과 push를 사용해서 진행 하였다.