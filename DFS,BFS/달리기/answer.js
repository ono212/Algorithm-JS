/*
2022-08-10
https://www.acmicpc.net/problem/16930
해결 ❌

queue의 shift가 시간을 많이 잡아먹는다는 점, 그리고 bfs 진차 아직도 어렵다,,,ㅠ-ㅠ
*/

const path = require("path");
let [input1, ...input2] = require("fs")
  .readFileSync(path.resolve(__dirname, "./input3.txt"))
  .toString()
  .trim()
  .split("\n");

const [N, M, K] = input1.split(" ").map(Number);
const graph = new Array(N + 1);
input2.forEach((e, idx) => {
  if (idx === N) return;

  graph[idx + 1] = [0, ...e.split("")];
});
let [x1, y1, x2, y2] = input2[N].split(" ").map(Number);

const visitied = Array.from(Array(N + 1), () =>
  new Array(M + 1).fill(Infinity)
);

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const bfs = (now_x, now_y) => {
  const queue = [[now_x, now_y]];
  let idx = 0;

  while (queue.length > idx) {
    let [x, y] = queue[idx];

    if (x === x2 && y === y2) return visitied[x2][y2];

    for (let i = 0; i < 4; i++) {
      for (let j = 1; j <= K; j++) {
        let nx = x + dx[i] * j;
        let ny = y + dy[i] * j;

        // 좌표를 벗어나는 경우 X
        if (nx < 1 || nx > N || ny < 1 || ny > M) break;

        // 벽일 경우 X
        if (graph[nx][ny] === "#") break;

        // 이미 더 최단 경로로 (nx, ny)에 도착한 경우는 더 확인할 필요가 없다.
        if (visitied[nx][ny] < visitied[x][y] + 1) break;

        if (visitied[nx][ny] === Infinity) {
          // 처음 도착한 경우
          queue.push([nx, ny]);
          visitied[nx][ny] = visitied[x][y] + 1;
        } else if (visitied[nx][ny] === visitied[x][y] + 1) continue; // 이미 다른 경로로 도착한 적이 있지만 도착하는데 걸리는 시간이 같기 때문에 break로 탈출하진 않고 뒤의 경로들도 계속 확인해본다.
      } // ❓이 else if구문을 굳이 난 넣어줄 필요가 없다고 생각하는데 넣어야 더 시간이 줄어든다.왜일까?
      // 🧐그리고 visitied[nx][ny] > visitied[x][y] + 1은  bfs특성상 없기 때문에 따로 break처리 해주지 않아도 작동하는 것 같다.
    }
    idx++;
  }
  return -1;
};

visitied[x1][y1] = 0;

console.log(bfs(x1, y1));
