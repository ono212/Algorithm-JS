/*
2023-11-10
백준 : https://www.acmicpc.net/problem/2636
해결 ⭕
*/

/*
녹는 부분 : 공기와 접촉된 칸

0으로 표시되는 부분
- 공기
- 치즈의 구멍

- 모두 녹았는지는 어떻게 판단할 수 있는가?
 => 그래프에 1이 없으면 모두 녹은 것.

1. 그래프의 모든 좌표의 탐색을 치즈가 모두 녹을 때까지 반복해야 한다.
  - 한 번 그래프의 모든 좌표를 탐색할 때 1시간이 흐른 것이다.
2. 그래프를 탐색할 때 해야할 일 : 녹여야 할 치즈 칸을 찾아야 한다.
  - 녹여야 할 칸인지 어떻게 구분할 것인가?
    => 칸의 상하좌우에 0인 칸이 있다면 녹아야 하는 칸이다.
    - 하지만 치즈의 구멍도 0으로 표시되기 때문에 그냥 공기인지 아니면 치즈의 구멍인지 판단이 필요하다.
    => 그렇다면 이것을 어떻게 판별할 것인가?
      - (0,0)에서 그래프 탐색을 시작하면 된다. 어차피 치즈는 한 조각이고 가장자리에는 치즈가 놓일 수 없기 때문이다.
        (0,0)에서 시작하면 치즈의 구멍에는 도달하지 않고 녹여야 할 치즈에만 도달할 수 있다.
  - 녹여야 할 칸을 찾으면, 바로 녹이는 건 X! 녹이고 나서 다음 좌표를 탐색할 때 꼬일 수 있다. 
    => visitied에 체크해두고 모든 좌표의 탐색이 끝나면 일괄적으로 업데이트를 해주는 방식으로
*/
const path = require("path");

let [firstLine, ...graph] = require("fs")
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .trim()
  .split("\n");

const [H, W] = firstLine.split(" ").map(Number);
graph = graph.map((line) => {
  return line.trim().split(" ").map(Number);
});
const visitied = Array.from({ length: H }, () => new Array(W).fill(false));
let time = 0;
let curretcheese = graph.flat().filter((el) => el === 1).length;
let meltedCheese = 0;

let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];

const DFS = (x, y) => {
  const stack = [[x, y]];

  while (stack.length) {
    let [now_x, now_y] = stack.pop();
    visitied[now_x][now_y] = true;

    for (let i = 0; i < 4; i++) {
      let nx = now_x + dx[i];
      let ny = now_y + dy[i];

      // 좌표의 범위를 벗어날 때
      if (nx < 0 || ny < 0 || nx >= H || ny >= W) continue;
      // 이미 방문(확인)한 좌표라면 또 확인할 필요 없다.
      if (visitied[nx][ny] === true || visitied[nx][ny] === "C") continue;
      // 해당 좌표가 치즈 좌표라면
      if (graph[nx][ny] === 1) visitied[nx][ny] = "C";
      // 해당 좌표가 공기 좌표라면
      if (graph[nx][ny] === 0) stack.push([nx, ny]);
    }
  }
};

while (curretcheese > 0) {
  DFS(0, 0);
  time++;

  // 그래프 탐색이 끝난 후 녹인 치즈를 그래프에 반영해준다.
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      // 녹인 치즈면 그래프를 공기로 바꿔준다.
      if (visitied[y][x] === "C") {
        graph[y][x] = 0;
        meltedCheese++;
      }
      // 다시 false로 초기화해준다.
      visitied[y][x] = false;
    }
  }

  curretcheese -= meltedCheese;

  if (curretcheese === 0) {
    console.log(time);
    console.log(meltedCheese);
    break;
  }

  meltedCheese = 0;
}
