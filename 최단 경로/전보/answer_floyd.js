/*
2022-05-03
이코테 262p
해결 🔺

처음에 플로이드 워셜로 풀었다. 하지만 N, M값의 범위가 크기 때문에 플로이드 워셜로 풀 수 없다.
답은 나오지만 아마 효율성과 시간 부분에서 초과가 날 것이다.
*/
const path = require("path");

let [line1, ...line2] = require("fs")
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .trim()
  .split("\n");

// 도시의 개수, 통로의 개수, 메시지 출발 도시
const [N, M, C] = line1.split(" ").map(Number);
const INF = 1e9;

let graph = Array.from(Array(N + 1), () => new Array(N + 1).fill(INF));

// 자기 자신에서 자기 자신으로 가는 비용 0으로 초기화
for (let i = 1; i < N + 1; i++) {
  graph[i][i] = 0;
}

for (let i = 0; i < M; i++) {
  let [X, Y, Z] = line2[i].split(" ").map(Number);

  graph[X][Y] = Z;
}

// 플로이드 워셜
for (let k = 1; k < N + 1; k++) {
  for (let a = 1; a < N + 1; a++) {
    for (let b = 1; b < N + 1; b++) {
      graph[a][b] = Math.min(graph[a][b], graph[a][k] + graph[k][b]);
    }
  }
}

let count = 0;
let time = 0;

for (let i = 1; i < N + 1; i++) {
  if (graph[C][i] !== 0 && graph[C][i] !== INF) {
    count++;
    time = Math.max(time, graph[C][i]);
  }
}

console.log(count, time);
