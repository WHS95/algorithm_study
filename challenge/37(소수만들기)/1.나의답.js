function solution(nums) {
  var answer = 0,
    number = 0;
  for (var i = 0; i < nums.length - 2; i++) {
    for (var j = i + 1; j < nums.length - 1; j++) {
      for (var l = j + 1; l < nums.length; l++) {
        number = nums[i] + nums[j] + nums[l];
        var count = 0;
        //나누어질 경우가 2번일 경우에만 소수이다.
        for (var k = 1; k <= number; k++) {
          if (number % k == 0) count++;
          //나누어지는 경우를 카운트
        }
        if (count == 2) answer++;
        //나누어진게 2개일경우에 카운트
      }
    }
  }
  return answer;
}
