/*
2024-03-19
백준 : https://www.acmicpc.net/problem/9342
해결 ⭕
*/

const path = require("path");
let [N, ...testCaseArr] = require("fs")
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .replace(/\r\n?/g, "\n")
  .trim()
  .split("\n");

const regex = /^[A-F]?A+F+C+[A-F]?$/;

testCaseArr.forEach((testCase) => {
  if (regex.test(testCase)) console.log("Infected!");
  else console.log("Good");
});
