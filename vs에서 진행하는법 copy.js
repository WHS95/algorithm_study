
// vs에서 진행하는법

//값이 들어오는부분(프로그래머스 상에서
    let a = 3;
    let b = 5;

    var answer = 0;
    let num = [];
    if (a === b) {
        answer = a;
    } else {
            answer = a + b
        }
    console.log(answer);
//-----------------//-----------------//-----------------//-----------------

// 프로그래머스에 답변 제출

    function solution(a, b) {
        var answer = 0;
        if (a === b) {
                answer = a;
        } else {
                answer = a + b
        }
        return answer;  
    }
