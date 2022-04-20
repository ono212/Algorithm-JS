/*
2022-04-20
백준 : https://www.acmicpc.net/problem/2693
해결 ⭕

꼭 while문을 사용하지 않고도 풀 수 있다. forEach문 사용이 기억에 남는다.
ㄴhttps://www.acmicpc.net/source/37498007
*/

const path = require("path");
let [t, ...arrays] = require("fs")
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .trim()
  .split("\n");

let n = 0;

while (n < t) {
  const array = arrays[n]
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);
  console.log(array[2]);

  n++;
}

