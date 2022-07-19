function solution(lottos, win_nums) {
    let low =0;
    var answer =[];
    let rank =[6,6,5,4,3,2,1]
        //최저 맞춘갯수 파악
        for(i=0; i< lottos.length; i++){
        for(j=0; j< lottos.length; j++){
            if(lottos[i]===win_nums[j])low ++
        }
        }
        //0의 갯수(추가 맞은 갯수) 파악
        let add = lottos.filter(element => 0 === element).length;
        //맞축개수 순위도출
        let lowlevel = rank[low]
        let highlevel = rank[low+add]
        //최대 순위, 최저순위 배열로 도출
        answer = [highlevel,lowlevel]
        
    return answer;
}

//다른사람의 답
function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    let minCount = lottos.filter(v => win_nums.includes(v)).length;
    //가지고 있는 로또 번호와 1등 번호와 비교를 해서 같은 값들만 남기고 배열만들어서 
    //배열의 갯수로 최저 등수를 구했다.
    let zeroCount = lottos.filter(v => !v).length;
    //굳이 !0인 경우만 True이므로  0값만 가져올수있다.

    const maxCount = minCount + zeroCount;

    return [rank[maxCount], rank[minCount]];
}

// console.log(!1)//flase
// console.log(!0)//true
    