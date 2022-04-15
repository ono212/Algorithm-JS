/*
2022-04-15
이코테 223p
해결 ❌

나름 점화식을 세워보긴 했는데 틀리게 세웠다!낄낄..
뭔가 감은 오는데,,아직 틀린 감이 온다,,,,
점화식 뿌셔!다 뿌셔!

✅ Point
왼쪽부터 접근한다는 거 가로 기준!! (히히 이건 생각했다)
어디까지 고려해야하느냐. 덮개의 크기를 생각하자!
*/

const path = require("path");

let N = require("fs")
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .trim();

N = +N;

// 각 가로일 때의 모든 경우의 수를 저장한다. (인덱스 = 가로)
const dp = new Array(N + 1).fill(0);

dp[1] = 1;
dp[2] = 3;

for (let i = 3; i < N + 1; i++) {
  dp[i] = (dp[i - 1] + 2 * dp[i - 2]) % 796796;
}

console.log(dp[N]);
