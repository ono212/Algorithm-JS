/*
2022-04-19
이코테 223p
해결 ❌

아예 해결법을 생각해내지 못했다.아직도 점화식을 세우는게 어렵다.
*/

const path = require("path");

let [input1, ...money] = require("fs")
  .readFileSync(path.resolve(__dirname, "./input2.txt"))
  .toString()
  .trim()
  .split("\n");

const [N, target] = input1.split(" ").map(Number);

money = money.map(Number);

const dp = new Array(target + 1).fill(10001);

dp[0] = 0;

for (let i = 0; i < N; i++) {
  for (let j = money[i]; j < target + 1; j++) {
    dp[j] = Math.min(dp[j], dp[j - money[i]] + 1);
  }
}

if (dp[target] === 10001) console.log(-1);
else console.log(dp[target]);
