/*
2022-05-12
백준 : https://www.acmicpc.net/problem/1647
해결 ⭕

크루스칼 알고리즘 문제.
처음에는 maxCount를 어떻게 구해줘야하나 했는데 간단하게 풀 수 있었다.
*/
const path = require("path");

let [firstLine, ...roads] = require("fs")
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .trim()
  .split("\n");

const [N, M] = firstLine.split(" ").map(Number);

const findParent = (parent, x) => {
  if (parent[x] != x) {
    parent[x] = findParent(parent, parent[x]);
  }
  return parent[x];
};

const unionParent = (parent, a, b) => {
  a = findParent(parent, a);
  b = findParent(parent, b);

  if (a < b) parent[b] = a;
  else parent[a] = b;
};

let answer = 0;
let maxCost = 0;
let edges = new Array(M); // 모든 간선을 담을 배열, 크기 : 간선의 개수
let parent = new Array(N + 1).fill(0);

for (i in parent) {
  parent[i] = +i; // 일단 자기 자신으로 초기화
}

for (let i = 0; i < M; i++) {
  const [a, b, cost] = roads[i].split(" ").map(Number);

  edges[i] = [cost, a, b];
}

edges.sort((a, b) => a[0] - b[0]); // cost(비용)을 기준으로 오름차순 정렬

for (let edge of edges) {
  let [cost, a, b] = edge;

  if (findParent(parent, a) != findParent(parent, b)) {
    unionParent(parent, a, b);
    answer += cost;
    maxCost = cost; // maxCost = Math.max(maxCost, cost); 정렬을 이미 했기 때문에 맨 마지막에 들어오는 cost가 제일 비용이 큰 간선이다.
  }
}

console.log(answer - maxCost);
