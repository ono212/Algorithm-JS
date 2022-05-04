/*
2022-05-05
프로그래머스 : https://programmers.co.kr/learn/courses/30/lessons/62048
해결 ⭕

처음에는 DFS로 풀어야하나 어렵게 생각이 됐는데 좌표로 생각해서 기울기 개념을 떠올리니 쉽게 풀렸다.
기울기 h / w를 변수로 두어 풀었으나, 자바스크립트 특성상 나눗셈의 결과가 소수점으로 부정확하게 계산되는 문제점이 있었다.
그래서 for문 안에서 x값과 곱하기를 먼저 해준 뒤 나누어주도록 했다.
*/
function solution(w, h) {
  var answer = 0;

  for (let x = 1; x < w; x++) {
    let y = (h * x) / w;

    if (y >= 1) answer += Math.floor(y);
  }

  return answer * 2;
}

console.log(solution(8, 12));
