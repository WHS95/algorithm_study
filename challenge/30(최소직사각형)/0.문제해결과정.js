//가로의 최대값과 세로의 최대값을 구하여 곱하여야 한다.
//명함의 가로 부분이 긴것 세로부분이 짧은것으로 생각을 하여 배열을 만들어 준다.
//가로 세로중 최대로 긴값끼리 곱을 하면 어떠한 사이즈의 명함도 들어간다.
let sizes = [[60, 50], [30, 70], [60, 30], [80, 40]]
            //[[a,b]]

    const lower = [];
    const higher = [];
    sizes.map(([a, b]) => {
        //map메소드를 이용하여 전체 배열에 function을 적용
        if(a > b){
            higher.push(a);
            lower.push(b);
        }else{
            lower.push(a);
            higher.push(b);
        }
        //[a,b]a,b의 대소를 비교하여 
        //큰 값은 higjer에 작은값은 lower에 배열로 담아둔다.
        
    })
    let result = Math.max(...higher) * Math.max(...lower);
    //higjer와 lower에서 가장 큰 값을 곱하여 답을 도출한다.

console.log(higher); //[ 60, 70, 60, 80 ]
console.log(lower); //[ 50, 30, 30, 40 ]
console.log(result); //4000