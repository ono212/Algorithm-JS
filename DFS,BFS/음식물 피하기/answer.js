/*
2022-04-16
백준 : https://www.acmicpc.net/problem/1743
해결 ⭕

처음에 BFS로 접근했다가 시간초과가 났다. 아직 BFS와 DFS 중 뭘로 접근해야할지 헷갈린다.
풀다보면 이게 왜 DFS(혹은 BFS)지 싶을 때가 많다..
*/
const path = require("path");

let [firstLine, ...foodWaste] = require("fs")
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .trim()
  .split("\n");

let [Y, X, N] = firstLine.split(" ").map(Number);

foodWaste = foodWaste.map((e) => e.split(" ").map(Number));

let graph = Array.from(Array(Y + 1), () => new Array(X + 1).fill(0));

// 음식물 쓰레기 배치
for (let i = 0; i < N; i++) {
  let [y, x] = foodWaste[i];

  graph[y][x] = 1;
}

let answer = 0;

let count = 0;

const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const DFS = (x, y) => {
  graph[x][y] = 0; // 0으로 방문 처리
  count++; // 이어진 개수 세기

  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    if (nx >= 1 && nx <= Y && ny >= 1 && ny <= X && graph[nx][ny] === 1) {
      DFS(nx, ny);
    }
  }

  return count;
};

for (let i = 1; i < Y + 1; i++) {
  for (let j = 1; j < X + 1; j++) {
    if (graph[i][j] === 1) {
      // 1일 때만 아예 탐색 시작하도록
      count = 0;
      answer = Math.max(DFS(i, j), answer);
    }
  }
}

console.log(answer);
