/*
2022-05-18
이코테 311p
해결 ⭕

공포도가 높을수록 공포를 쉽게 느낌.
공포도가 X인 모험가 X명이상으로 구성하도록.
최대 몇 개의 모험가 그룹.(N명이 모두 그룹에 속할 필요는 X.)

? 그럼 그룹에 혼자 있어도 되는건지?
*/

/*
1. 공포도 정렬(오름차순)
2. 배열의 앞에서부터 그룹1에 넣는다.
3-1. 다음 요소는 앞의 그룹의 공포도와 비교하여 명수가 필요할 경우 해당 그룹에 넣어준다.
3-2. 이미 충족했을 경우 새로운 그룹을 생성하여 넣는다.
4. 반복한다.
*/

const path = require("path");

let [N, fear] = require("fs")
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .trim()
  .split("\n");

N = +N;
fear = fear.split(" ").map(Number);

fear.sort();

let group = [];

fear.forEach((now, index) => {
  if (index === 0) {
    group.push([now]);
    return;
  }

  let last = group[group.length - 1];
  let lastFear = last[last.length - 1];

  if (last.length < lastFear) last.push(now);
  else group.push([now]);
});

let last = group[group.length - 1];
let lastFear = last[last.length - 1];

if (last.length < lastFear) group.pop();

console.log(group.length);
