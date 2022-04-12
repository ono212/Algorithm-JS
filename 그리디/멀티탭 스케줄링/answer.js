/*
2022-04-11
백준 : https://www.acmicpc.net/problem/1700
해결 ⭕

플러그를 빼는 최소 횟수 (최적을 만족하도록)
*/

/*
✅경우의 수
1. 이미 꽂혀있는 경우
2. 멀티탭 자리가 비어있을 경우
3. 멀티탭이 꽉 차 있을 경우
  => ⭐남은 order를 확인하면서 현재 멀티탭에 꽂혀 있는 아이템들 중 가장 늦게 나오는 아이템을 뽑아야한다.
  3-1. lastItem에 현재 multitab에 꽂혀있는 아이템들을 복사한다.
  3-2. 남은 order를 순회하면서 multitab에 꽂혀있는 아이템일 경우, lastItem에서 삭제한다.
  3-3. lastItem의 길이가 1이 되는 순간, lastItem에 있는 아이템이 가장 늦게 나오는 아이템이므로 뽑는다!

*/

const path = require("path");

let [line1, line2] = require("fs")
  .readFileSync(path.resolve(__dirname, "./input2.txt"))
  .toString()
  .trim()
  .split("\n");

let [N, K] = line1.split(" ");
const order = line2.split(" ").map(Number); // 사용 순서

const multitab = [];
let answer = 0;

for (let i = 0; i < K; i++) {
  if (multitab.includes(order[i])) continue; // 이미 멀티탭에 꽂혀있는 경우
  if (multitab.length < N) multitab.push(order[i]); // 멀티탭이 비어있을 경우
  else {
    /*
    멀티탭이 꽉 차 있을 경우
    1. N개 중에 뺄 것이 있는 경우 (멀티탭에서 N개에 포함되지 않는게 있을 경우)
    2. N개 중에 뺄 것이 없는 경우 (이후 order 돌면서 가장 늦게 나오는 것을 빼야함)
    */

    // 현재 멀티탭에 꽂혀 있는 물건들 중에서 가장 늦게 나오는 아이템을 담는 배열
    // 현재 멀티탭에 꽂혀 있는 물건들을 slice로 복사한다.
    let lastItem = multitab.slice();

    for (let j = i + 1; j < K; j++) {
      if (lastItem.length === 1) break;
      if (lastItem.includes(order[j])) {
        lastItem.splice(lastItem.indexOf(order[j]), 1);
      }
    }

    multitab.splice(multitab.indexOf(lastItem[0]), 1);
    multitab.push(order[i]);

    answer++;
  }
}

console.log(answer);
