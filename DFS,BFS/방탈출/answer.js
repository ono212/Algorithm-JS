/*
2022-07-25
https://www.acmicpc.net/problem/23352
해결 ⭕

문제 조건을 제대로 이해하지 못해서 헤맸던 것 같다.
그리고 끝 방을 구하는 더 효율적인 방법이 있을 것 같은데 잘 모르겠다..

비밀번호가 존재하지 않을 경우를 따로 처리해주지 않아서 헤맸다. 예외인 경우도 문제에서 잘 파악해서 꼭 조건처리해야줘야겠다!
허무했다.. 
*/
const path = require("path");
let input = require("fs")
  .readFileSync(path.resolve(__dirname, "./input1.txt"))
  .toString()
  .trim()
  .split("\n");

// N: 세로, M: 가로
const [N, M] = input[0].split(" ").map(Number);
const graph = Array.from(Array(N), () => new Array(M).fill(0));

for (let i = 0; i < N; i++) {
  graph[i] = input[i + 1].split(" ").map(Number);
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const BFS = (y, x) => {
  const start_room = graph[y][x];

  const distance = Array.from({ length: N }, () => Array(M).fill(0));
  distance[y][x] = 1;

  const queue = [[y, x]]; // 인자로 들어온 노드를 큐에 넣어준다.

  while (queue.length) {
    let [y, x] = queue.shift(); // 큐의 맨 앞 요소를 꺼낸다.

    // 4가지 방향으로
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      // 좌표를 벗어나는 경우 X
      if (nx <= -1 || nx >= M || ny <= -1 || ny >= N) continue;

      // 0인 경우 들어갈 수 없다.
      if (graph[ny][nx] === 0) continue;
      else if (distance[ny][nx] === 0) {
        distance[ny][nx] = distance[y][x] + 1;
        queue.push([ny, nx]);
      }
    }
  }

  let max = Math.max(...distance.flat());
  let end_room = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (distance[i][j] === max) end_room = Math.max(end_room, graph[i][j]);
    }
  }

  return [max, start_room + end_room];
};

let maxDistance = 0;
let password = 0;
for (let y = 0; y < N; y++) {
  for (let x = 0; x < M; x++) {
    if (graph[y][x]) {
      let [totalDistance, newPassword] = BFS(y, x);

      if (totalDistance > maxDistance) {
        maxDistance = totalDistance;
        password = newPassword;
      } else if (totalDistance === maxDistance) {
        password = Math.max(password, newPassword);
      }
    }
  }
}

console.log(password);
