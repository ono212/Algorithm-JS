/*
2024-03-14
백준 : https://www.acmicpc.net/problem/1244
해결 ⭕

[남학생이 상태를 바꾸는 경우]
- 스위치 번호가 자기가 받은 수의 배수일 때
- 그럼 상태를 어떻게 바꿔야할까?
    스위치의 상태를 배열로 저정한다. 스위치의 번호가 1부터 시작하기 때문에 [0]에는 임의로 넣어준다.
    인덱스 <= 스위치 배열의 길이일 때까지 [자기가 받은 수], [자기가 받은 수 * 2], ... 에 대해 스위치 상태를 바꿔준다.

[여학생이 상태를 바꾸는 경우]
- 자기의 번호의 스위치를 중심으로 좌우대칭으로 같은 번호인 스위치들의 구간 중 제일 긴 구간으로
- 그럼 상태를 어떻게 바꿔야할까?
    스위치[자기가 받은 수]
    루프를 돈다.
      첫번째 : 자기가 받은 수 - 1, 자기가 받은 수 + 1
      두번째 : 자기가 받은 수 - 2, 자기가 받은 수 + 2
      세번째 : 자기가 받은 수 - 3, 자기가 받은 수 + 3
      ...
      언제까지?
        => 자기가 받은 수 - i >= 0, 자기가 받은 수 + i < 배열의 길이
      루프 탈출 조건
        => 스위치[자기가 받은 수 - i] !== 스위치[자기가 받은 수 + i]

출력할 때, 한 줄에 20개씩 출력해야하는 것 유의! 
*/
const path = require("path");

let [totalSwitch, ...input] = require("fs")
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .replace(/\r\n?/g, "\n")
  .trim()
  .split("\n");

const switchArr = [-1, ...input[0].split(" ").map((e) => Number(e))];

const changeByBoy = (switchNum) => {
  let multiplyNum = 1;

  while (1) {
    let targetSwitchNum = switchNum * multiplyNum;

    if (targetSwitchNum <= totalSwitch) {
      switchArr[targetSwitchNum] = switchArr[targetSwitchNum] === 0 ? 1 : 0;
      multiplyNum++;
    } else break;
  }
};

const changeByGirl = (switchNum) => {
  switchArr[switchNum] = switchArr[switchNum] === 0 ? 1 : 0;

  for (let i = 1; switchNum - i >= 0, switchNum + i <= totalSwitch; i++) {
    if (switchArr[switchNum - i] === switchArr[switchNum + i]) {
      switchArr[switchNum - i] = switchArr[switchNum - i] === 0 ? 1 : 0;
      switchArr[switchNum + i] = switchArr[switchNum - i];
    } else break;
  }
};

for (let turn = 2; turn < input.length; turn++) {
  const [gender, switchNum] = input[turn].split(" ").map((e) => Number(e));

  // 남학생일 경우
  if (gender === 1) changeByBoy(switchNum);
  // 여학생일 경우
  else if (gender === 2) changeByGirl(switchNum);
}

for (let i = 1; i <= totalSwitch; i += 20) {
  console.log(switchArr.slice(i, i + 20).join(" "));
}
