/*
2022-04-18
백준 : https://www.acmicpc.net/problem/3460
해결 ⭕
*/

const path = require("path");
let input = require("fs")
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .trim()
  .split("\n");

let t = +input[0];

const binary = [];
const answer = [];

for (let i = 1; i < t + 1; i++) {
  if (+input[i] > 1) {
    let quotient = parseInt(+input[i] / 2);
    let remainder = input[i] % 2;

    binary.push(remainder);

    while (quotient > 1) {
      remainder = quotient % 2;
      quotient = parseInt(quotient / 2);
      binary.push(remainder);
    }
    binary.push(quotient);

    let fromIndex = binary.indexOf(1);
    while (fromIndex != -1) {
      answer.push(fromIndex);
      fromIndex = binary.indexOf(1, fromIndex + 1);
    }

    binary.splice(0);
  } else answer.push(0); // 1이 입력됐을 때
}

for (let i = 0; i < answer.length; i++) {
  process.stdout.write(answer[i] + " ");
}
