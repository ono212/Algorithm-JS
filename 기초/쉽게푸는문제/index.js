/*
2022-04-21
백준 : https://www.acmicpc.net/problem/1292
해결 ⭕
*/

/*
입력 : 구간의 시작과 끝을 나타내는 정수 A, B(1 ≤ A ≤ B ≤ 1,000)가 주어진다.
즉, 수열에서 A번째 숫자부터 B번째 숫자까지 합을 구하면 된다.

출력 : 구간에 속하는 숫자의 합을 출력

1 2 2 3 3 3 4 4 4 4 5 5 5 5 5 ...
1 2 3 4 5 6 7 8     
*/

const path = require("path");
let [a, b] = require("fs")
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let n = 0;
let answer = 0;

for (let i = 1; i <= b; i++) {
  for (let j = 1; j <= i; j++) {
    n++;
    if (n >= a) {
      answer += i;
    }
    if (n === b) break;
  }
  if (n === b) break;
}

console.log(answer);
