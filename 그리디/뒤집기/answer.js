/*
2022-04-10
이코테 313p, 백준 : https://www.acmicpc.net/problem/1439
해결 ⭕

최소 횟수로 모두 같은 숫자로 만들기
문자열 길이는 중요하지 않고 뭉텅이의 개수가 중요하다.
*/

const path = require("path");

let S = require("fs")
  .readFileSync(path.resolve(__dirname, "./input5.txt"))
  .toString()
  .trim();

let count = { 0: 0, 1: 0 };

let now = S[0];

for (let i = 1; i <= S.length; i++) {
  if (S[i] !== now) {
    count[now] += 1;

    now = S[i];
  }
}

if (count["0"] === 0 || count["1"] === 0) {
  console.log(0);
} else {
  console.log(Math.min(count["0"], count["1"]));
}
