/*
2022-04-25
백준 : https://www.acmicpc.net/problem/2460
해결 ⭕
*/

const path = require("path");
let input = require("fs")
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .trim()
  .split("\n");

// 문제 : 기차에 사람이 가장 많을 때의 사람 수
// 내리고 나서, 탄다. 내리고 => 타고

let maxPeople = 0;
let nowPeople = 0;

for (let i = 0; i < 10; i++) {
  const station = input[i].split(" ").map((num) => +num);
  console.log("station : ", station);

  nowPeople = nowPeople - station[0] + station[1];

  maxPeople = Math.max(maxPeople, nowPeople);
}

console.log(maxPeople);
