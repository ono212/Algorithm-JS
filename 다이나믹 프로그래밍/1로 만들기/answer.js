/*
2022-04-08
백준 : https://www.acmicpc.net/problem/1463
해결 ❌

경우의 수를 세세하게 생각 못했었던 것 같다.
DP 문제를 많이 풀어봐야할 것 같다..아직 감이 안잡힌다8ㅅ8

경우의 수는 4가지로 나뉜다.
1. 2와 3으로 어느 것으로 나누어 떨어지지 않을 때
2. 2와 3 둘다 나누어 떨어질 때
3. 2로만 나누어 떯어질 때 (즉, -1하거나 2로 나누는, 2가지가 가능한 상황)
4. 3으로만 나누어 떨어질 때 (즉, -1하거나 3으로 나누는, 2가지가 가능한 상황)

참조 : https://nyang-in.tistory.com/270?category=855466
*/

const path = require("path");

let X = require("fs")
  .readFileSync(path.resolve(__dirname, "./input1.txt"))
  .toString()
  .trim();

X = +X;

// 1이 되기까지의 횟수를 저장한다.
const dp = new Array(X + 1).fill(0);

dp[1] = 0;

for (let i = 2; i <= X; i++) {
  // 🔴 2와 3으로 어느 것으로 나누어 떨어지지 않을 때
  if (i % 2 !== 0 && i % 3 !== 0) {
    dp[i] = dp[i - 1] + 1;
  }
  // 🟠 2와 3 둘다 나누어 떨어질 때
  else if (i % 2 === 0 && i % 3 === 0) {
    dp[i] = Math.min(dp[i / 2] + 1, dp[i / 3] + 1, dp[i - 1] + 1);
  }
  // 🟡 2로만 나누어 떯어질 때 (즉, -1하거나 2로 나누는, 2가지가 가능한 상황)
  else if (i % 2 === 0) {
    dp[i] = Math.min(dp[i - 1] + 1, dp[i / 2] + 1); // 2가지 선택이 가능하기 때문에 최솟값을 고른다.
  }
  // 🟢 3으로만 나누어 떨어질 때 (즉, -1하거나 3으로 나누는, 2가지가 가능한 상황)
  else if (i % 3 === 0) {
    dp[i] = Math.min(dp[i - 1] + 1, dp[i / 3] + 1); // 2가지 선택이 가능하기 때문에 최솟값을 고른다.
  }
}

console.log(dp[X]);
