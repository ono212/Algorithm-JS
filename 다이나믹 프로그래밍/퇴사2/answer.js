/*
2022-08-15
백준 : https://www.acmicpc.net/problem/15486
해결 ❌

N이 최대 150만이므로 완전탐색 방식으로 풀 경우 시간초과가 발생한다. 

상담을 시작하거나, 상담을 시작하지 않거나. => 2가지 경우
dp[i] = i일까지 누적된 최대 이익

[참조]
https://cider.tistory.com/14
https://dndi117.tistory.com/entry/aaa
https://charles098.tistory.com/104
*/
const path = require("path");

let [N, ...schedule] = require("fs")
  .readFileSync(path.resolve(__dirname, "./input1.txt"))
  .toString()
  .trim()
  .split("\n");

N = +N;

schedule.map((e, idx, arr) => (arr[idx] = e.split(" ").map(Number)));
console.log(schedule);
const dp = new Array(N + 1).fill(0);
let maximumProfit = 0;

for (let i = 0; i < N; i++) {
  maximumProfit = Math.max(maximumProfit, dp[i]);

  const [time, pay] = schedule[i];
  if (i + time <= N) {
    dp[i + time] = Math.max(dp[i + time], maximumProfit + pay);
    // Math.max(오늘 시작하는 상담이 끝난 날의 수익, 현재까지의 최대 수익에 이번 상담의 수익을 더한 값)
    // dp[i + time]은 i일 때 상담을 시작하면 상담이 끝나는 날이다. 즉, 상담이 끝나는 날의 값을 갱신해주고 있다.
    // 결국 N날까지의 최대 이익을 계산하는 것이기 때문에 1일부터 시작해서 순차적으로 확인해도 문제가 되지 않는다.
  }
}
console.log(Math.max(...dp));

// 상담을 못하는 상황일 수도 잇잖아 (이미 상담이 진행중이어서)
