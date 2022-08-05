/*
2022-04-05
이코테, 백준 : https://www.acmicpc.net/problem/2178

게임 맵 최단거리와 비슷한 문제!
예전에 풀고 안올렸다,,
bfs는 최단거리를 보장한다,,!!!!!!

참조 : https://nyang-in.tistory.com/235
*/

/*
input1: 10 (이코테 예제)
input2~5: 백준 예제
*/
const path = require("path");
let [firstLine, ...maze] = require("fs")
  .readFileSync(path.resolve(__dirname, "./input1.txt"))
  .toString()
  .trim()
  .split("\n");

let [N, M] = firstLine.split(" ").map(Number);

maze = maze.map((e) => e.split("").map(Number));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const bfs = (now_x, now_y) => {
  const queue = [[now_x, now_y]];

  while (queue.length) {
    let [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      // 좌표를 벗어나는 경우 X
      if (nx <= -1 || nx >= N || ny <= -1 || ny >= M) continue;

      // 괴물이거나 이미 방문한 적 있는 경우 X
      if (maze[nx][ny] !== 1) continue;

      //✅ 1일 때만!
      maze[nx][ny] = maze[x][y] + 1;
      queue.push([nx, ny]);
    }
  }
  return maze[N - 1][M - 1];
};

console.log(bfs(0, 0));
