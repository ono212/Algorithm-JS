/*
2023-10-16
백준 : https://www.acmicpc.net/problem/17626
해결 ❌
*/

/*
규칙 : dp[N] = dp[N - n^2] + dp[n^2] = dp[N - n^2] + 1
dp[n^2]는 제곱수이기 때문에 무조건 1이다.
n의 조건 : n^2 <= N, 즉 제곱을 해서 N과 같거나 작아야 한다.

예를 들어 N이 26이라고 하자. 이 때 n은 1,2,3,4,5가 될 수 있다.
26을 만들기 위해서 여러 경우의 수가 있을 수 있다. 어떤 경우가 가장 최소 개수일 지 알 수 없기 때문에
n이 1인 경우, 2인 경우, ... ,5인 경우를 모두 따져서 최소 개수를 구해야 한다.
즉, dp[26] = dp[1^2] + dp[25]
           =    1    + dp[25]
    dp[26] = dp[2^2] + dp[21]
           =    1    + dp[21]
    dp[26] = dp[3^2] + dp[17]
                1    + dp[17]
    dp[26] = dp[4^2] + dp[10]
                1    + dp[10]
    dp[26] = dp[5^2] + dp[1]
                1    + dp[1]

[구현 방법]                      
보텀업 방식을 사용해서 2부터 N까지 각자의 값들을 순차적으로 구한다.
*/
const path = require("path");
const N = Number(
  require("fs")
    .readFileSync(path.resolve(__dirname, "./input1.txt"))
    .toString()
    .trim()
);

const dp = new Array(N + 1).fill(0);

dp[1] = 1;

// 보텀업이기 때문에 2부터 순차적으로 N까지 올라가며 이전 값들을 이용하여 구한다.
for (let i = 2; i <= N; i++) {
  // j루프를 시작할 때는 일단 min을 큰 수로 지정해준다.
  let min = 1e9;

  // 1부터 ~ N^2보다 작은 제곱수
  for (let j = 1; j * j <= i; j++) {
    // j루프를 돌면서 이전의 j보다 현재 j의 값이 작은지 확인! => 최소의 개수를 구해야하기 때문에
    min = Math.min(min, dp[i - j * j]);
  }

  // 더해준 1은 dp[j^2]의 값인데, 제곱수이기 때문에 1을 더해주는 것이다.
  dp[i] = min + 1;
}

console.log(dp[N]);
