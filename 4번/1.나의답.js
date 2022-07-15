
function solution(a, b) {
    let answer = ""
    if(a == b ){
        answer = a
        //1)a와 b의 값이 같으면, 둘중 아무값이나 출력한다.
    }else{
        var arr = new Array( a, b);
        arr.sort(function(a,b){
            return a -b
        });
        //2)a,b둘중 어떤값이 큰지를 모르니깐 배열에 넣어 오름차순을 적용한다.
        //[a,b](a<b)로 배엵 만들었음
        for(var i =arr[0]; i<arr[1]+1; i++){
            answer +=i
        //3)a,b차이값만큼 작은값기준으로 1큰값만큼 더해준다.
        //1,3 
        // i= 1; i<3+1; i++
        // 1 + 2 + 3
        }
    }
    return answer;
}

//1)a와 b의 값이 같으면, 둘중 아무값이나 출력한다.
//2)a,b둘중 어떤값이 큰지를 모르니깐 배열에 넣어 오름차순을 적용한다.
//3)a,b차이값만큼 작은값기준으로 1큰값만큼 더해준다.


//우수 예시 코드

function solution(a, b) {
    let answer = 0
    return (a+b)*(Math.abs(b-a)+1)/2;
}

//가우스 공식을 사용하여 문제를 풀었다.
//수학적 지식도 엄청 중요하다고 느꼈음

