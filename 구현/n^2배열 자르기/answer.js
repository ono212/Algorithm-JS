/*
2022-09-13
프로그래머스 https://school.programmers.co.kr/learn/courses/30/lessons/87390
해결 ⭕
*/
function solution(n, left, right) {
  var answer = [];

  let start_row = parseInt(left / n);
  let start_idx = left % n;
  let value;
  let count = left - 1;

  for (let i = start_row; i < n; i++) {
    let recur_num = i + 1;

    for (let j = 0; j < n; j++) {
      if (j <= i) value = recur_num;
      else value++;

      if (i === start_row && j < start_idx) continue;
      else {
        count += 1;
        answer.push(value);
        if (count === right) break;
      }
    }
    if (count === right) break;
  }
  return answer;
}

console.log(solution(3, 2, 5)); // [3, 2, 2, 3]
console.log(solution(4, 7, 14)); // [4,3,3,3,4,4,4,4]
