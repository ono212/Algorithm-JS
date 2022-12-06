/*
2022-12-07
프로그래머스 : https://school.programmers.co.kr/learn/courses/30/lessons/60057

단위로 잘라지지 않으면 그냥 skip. 그대로 붙여준다.
압축했을 때 가장 짧은 길이

압축하지 않거나, 1개 단위, 2개 단위, ...
*/
function solution(s) {
  var answer = s.length;

  for (let unit = 1; unit <= parseInt(s.length / 2); unit++) {
    let prev = s.substring(0, unit);
    let count = 1;
    let compressed = "";

    for (let j = unit; j < s.length; j += unit) {
      let now = s.substring(j, j + unit);

      if (now === prev) count++;
      else {
        if (count >= 2) {
          compressed += count + prev;
        } else compressed += prev; // 반복횟수가 1일 경우, 1은 생략해서 표현하기 때문

        count = 1; // count 초기화해주기
        prev = now; // prev값 now로 변경
      }
    }

    // 남은 값 처리
    if (count >= 2) compressed += count + prev;
    else compressed += prev;

    answer = Math.min(answer, compressed.length);
  }
  return answer;
}

console.log(solution("aabbaccc")); // 7
console.log(solution("ababcdcdababcdcd")); // 9
console.log(solution("xababcdcdababcdcd")); // 17
