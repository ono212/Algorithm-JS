/*
2022-08-02
백준 : https://www.acmicpc.net/problem/11053
해결 ❌

dp로 풀어야겠다는 생각조차 못했다,,대체 언제쯤 dp를 잘 풀 수 았을까..!!!!
아직 dp에 어떤 값을 넣어야하는지, 그리고 언제 dp로 풀어야 효율적으로 풀 수 있는지를 판단하지 못하는 것 같다.

dp[i] = input[i]로 끝나는 가장 긴 증가하는 부분수열의 길이

참조 : https://buyandpray.tistory.com/73
*/

const path = require("path");

let [N, input] = require("fs")
  .readFileSync(path.resolve(__dirname, "./input1.txt"))
  .toString()
  .trim()
  .split("\n");

N = +N;
input = input.split(" ").map(Number);

// 자기 자신만 있는 부분수열일 경우 길이가 1이기 때문에 1로 초기화해주었다.
const dp = new Array(N).fill(1);

for (let i = 1; i < input.length; i++) {
  // dp[i]값을 구하기 위해 dp[0] ~ dp[i-1]의 값을 참고하고 있다.
  for (let j = 0; j < i; j++) {
    if (input[i] > input[j]) dp[i] = Math.max(dp[j] + 1, dp[i]);
  }
}

console.log(Math.max(...dp));
