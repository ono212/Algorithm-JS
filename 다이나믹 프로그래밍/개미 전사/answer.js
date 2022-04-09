/*
2022-04-09
이코테 220p
해결 ❌

이게 왜 DP로 풀 수 있는지 전혀 풀이가 생각나지 않았다.
근데 이번 문제를 통해서 DP에 대한 개념이 더 잡힌 것 같다.

참조 : https://hongl.tistory.com/22
*/

const path = require("path");

let [N, warehouse] = require("fs")
  .readFileSync(path.resolve(__dirname, "./input3.txt"))
  .toString()
  .trim()
  .split("\n");

N = +N;

warehouse = warehouse.split(" ").map(Number);

// 각 위치까지의 약탈 식량 최댓값을 저장한다.
const dp = new Array(N).fill(0);

dp[0] = warehouse[0];
dp[1] = Math.max(warehouse[0], warehouse[1]);

for (let i = 2; i < N; i++) {
  dp[i] = Math.max(dp[i - 1], dp[i - 2] + warehouse[i]);
}

console.log(dp[N - 1]);
