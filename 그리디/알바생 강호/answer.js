/*
2024-03-13
백준 : https://www.acmicpc.net/problem/1758
해결 ⭕

[조건]
N <= 100,000
원래 주려던 팁 >= 1
계산한 팁이 음수라면 받지 않는다.

구하려는 값 : 강호가 받을 수 있는 팁의 최댓값
팁 = 원래 주려고 생각했던 돈 - (받은 등수 - 1) 

팁이 "큰" 순서대로 정렬하는 경우와 팁이 "작은" 순서대로 정렬하는 경우 둘 다 계산한다.
그래서 둘 중 최댓값을 고른다.

1. 팁이 많은 순서대로 정렬
    - input을 내림차순으로 sort한다.
2. input을 순회하면서 팁을 계산하고 합한다.
*/
const path = require("path");

let [N, ...input] = require("fs")
  .readFileSync(path.resolve(__dirname, "./input3.txt"))
  .toString()
  .replace(/\r\n?/g, "\n")
  .trim()
  .split("\n");

N = +N;
input = input.map((e) => Number(e));

// 1. 팁을 큰 순서대로 정렬했을 경우
let totalTip1 = 0;

input = input.sort((a, b) => b - a);
input.every((money, index) => {
  let tip = money - index;

  // tip이 0이하라면 이후 인덱스의 tip도 0이하인 것이 확실하기 때문에 return false로 every문을 종료한다. 이후의 계산이 필요하지 않다.
  if (tip <= 0) return false;
  else {
    totalTip1 += tip;
    return true;
  }
});

// 2. 팁을 작은 순서대로 정렬했을 경우
let totalTip2 = 0;

input = input.sort((a, b) => a - b);
input.every((money, index) => {
  let tip = money - index;

  if (tip > 0) totalTip2 += tip;
  return true;
});

console.log(Math.max(totalTip1, totalTip2));
