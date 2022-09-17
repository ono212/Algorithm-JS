/*
2022-09-17
백준, 프로그래머스 : https://www.acmicpc.net/problem/1932
해결⭕

프로그래머스에서는 JavaScript를 지원하지 않는 문제여서 채점을 돌려보진 못했다. 백준에선 통과했다.

[해결 방법]
dp[i] : i까지의 가능한 가장 큰 값ㄴ
triangle배열을 다 순회해주면서 이전 라인의 가장 큰 값을 참조하여 dp[i]를 갱신할 수 있도록 구현했다.
인덱스에 따라 값을 체크해야하는 경우의 수가 달라서 || 연산자를 활용했다.

[개선할 점]
- dp배열을 빈 배열로 초기화해서 넣어주는 방식으로 했는데, 그것보단 triangle배열을 그대로 복사해서 사용하는 방법이 더 간단하다.
=> 그렇게 하면 if (lineIndx < 1)을 체크해주는 방법을 지워도 된다.
*/
const path = require("path");

let [N, ...triangle] = require("fs")
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .trim()
  .split("\n");
triangle = triangle.map((e) => e.split(" ").map(Number));

let answer = 0;
const dp = Array.from({ length: triangle.length }, () => new Array(0));

triangle.forEach((line, lineIdx) => {
  line.forEach((el, elIdx) => {
    if (lineIdx < 1) dp[lineIdx][elIdx] = el;
    else {
      if (elIdx > 0)
        dp[lineIdx][elIdx] =
          Math.max(dp[lineIdx - 1][elIdx - 1], dp[lineIdx - 1][elIdx] || 0) +
          el;
      else dp[lineIdx][elIdx] = dp[lineIdx - 1][elIdx] + el;
    }

    if (lineIdx === triangle.length - 1) answer = Math.max(...dp[lineIdx]);
  });
});

console.log(answer);
