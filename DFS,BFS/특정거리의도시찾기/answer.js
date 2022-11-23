/*
날짜 : 2022-11-23
문제 : https://www.acmicpc.net/problem/18352
해결 ⭕

최단거리 문제로 BFS로 해결했다.
DFS로 풀 경우 시간초과가 난다.
*/
const path = require("path");

const [firstLine, ...g] = require("fs")
  .readFileSync(path.resolve(__dirname, "./input3.txt"))
  .toString()
  .trim()
  .split("\n");

const [N, M, K, X] = firstLine.split(" ").map(Number);
const INF = 1e9;
const graph = {};
const visitied = Array.from({ length: N + 1 }).fill(INF);
const answer = [];

for (let i = 0; i <= N; i++) {
  graph[i] = [];
}

g.forEach((e) => {
  let [from, to] = e.split(" ").map(Number);
  graph[from].push(to);
  //graph[to].push(from); ⬅ 단방향 그래프이기 때문에 이 코드는 필요 없다.
});

function BFS(start) {
  const queue = [start];
  visitied[start] = 0;

  while (queue.length) {
    let x = queue.shift();
    i++;

    if (visitied[x] >= K) {
      answer.push(x);
      continue;
    }

    for (let child of graph[x]) {
      if (visitied[child] > visitied[x] + 1) {
        queue.push(child);
        visitied[child] = visitied[x] + 1;
      }
    }
  }
}

BFS(X);

console.log(answer.length ? answer.sort((a, b) => a - b).join("\n") : "-1");

function DFS(x, distance) {
  visitied[x] = distance;
  console.log("냠냠");
  i++;

  for (let child of graph[x]) {
    if (visitied[child] > distance + 1) DFS(child, distance + 1);
  }
}
/*

[ input4 정답 ]
-1

[ input5 정답 ]
8
9
10
11
12
13
14
15

*/
