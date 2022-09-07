/*
2022-09-07
백준 : https://www.acmicpc.net/problem/15989
해결 ❌

dp에 뭘 저장해야할까?
모르겠다,,풀이를 봐도 모르겠어,,

dp[i] : 숫자 i를 만들 수 있는 경우의 수
1만 사용해서 i를 만드는 경우 -> 2도 사용해서 i를 만드는 경우 -> 3도 사용해서 i를 만드는 경우
를 for문을 통해서 순차적으로 누적시킨다.

- 참조
https://sangsangss.tistory.com/218
https://whatryando.tistory.com/71
https://ssu-gongdoli.tistory.com/39
*/
const path = require("path");
const input = require("fs")
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.shift();

// 1만 사용해서 숫자를 구성할 경우는 모든 숫자가 1가지이기 때문에 1로 초기화한다.
let dp = new Array(10001).fill(1);
const answer = [];

for (let i = 2; i <= 3; i++) {
  for (let j = i; j <= 10001; j++) {
    dp[j] += dp[j - i];
  }
}

input.forEach((v) => {
  answer.push(dp[v]);
});

console.log(answer.join("\n"));
