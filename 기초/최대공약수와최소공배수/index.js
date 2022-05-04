/*
2022-05-04
백준 : https://www.acmicpc.net/problem/2609
해결 ⭕
*/

const path = require("path");
let [a, b] = require("fs")
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .trim()
  .split(" ");

let i = 1;

const a_yaksu = [];
const b_yaksu = [];

let GCF = 1;

while (1) {
  if (a % i === 0) {
    a_yaksu.push(i);
  }
  i++;
  if (i > a) break;
}

i = 1;

while (1) {
  if (b % i === 0) {
    b_yaksu.push(i);
    if (a_yaksu.indexOf(i) !== -1) GCF = i;
  }
  i++;
  if (i > b) break;
}

let LCM = parseInt(a / GCF) * parseInt(b / GCF) * GCF;

console.log(GCF);
console.log(LCM);
