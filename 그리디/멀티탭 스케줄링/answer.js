/*
2022-04-11
백준 : https://www.acmicpc.net/problem/1700
해결 ⭕

플러그를 빼는 최소 횟수 (최적을 만족하도록)
*/

/*
각 용품의 사용 횟수를 세서 count객체에 저장한다.
사용할 때마다 -1을 해준다.

✅경우의 수
1. 이미 꽂혀있는 경우  =>  -1
2. 멀티탭 자리가 비어있을 경우  =>  -1
3. 멀티탭이 꽉 차 있을 경우  =>  count로 뒤에서 사용되는지 여부 판단 후에 꽂는다.
*/

const path = require("path");

let [line1, line2] = require("fs")
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .trim()
  .split("\n");

let [N, K] = line1.split(" ");
const order = line2.split(" ").map(Number); // 사용 순서

const multitab = [];
let answer = 0;
let count = {};

for (let item of order) {
  if (count[item]) {
    count[item]++;
  } else {
    count[item] = 1;
  }
}

for (let i = 0; i < order.length; i++) {
  if (multitab.includes(order[i])) {
    count[order[i]]--;
    continue;
  }
  if (multitab.length < N) {
    // 멀티탭이 비어있을 경우
    count[order[i]]--;
    multitab.push(order[i]);
  } else {
    // 멀티탭이 꽉 차 있을 경우
    let popItemIndex = 0;
    let min = count[multitab[0]];

    for (let j = 1; j < multitab.length; j++) {
      if (count[multitab[j]] < min) {
        popItemIndex = j;
        min = count[multitab[j]];
      }
    }

    multitab.splice(popItemIndex, 1);
    multitab.push(order[i]);

    answer++;
  }
}

console.log(answer);
