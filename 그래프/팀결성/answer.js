/*
2022-05-12
이코테 299p
해결 ⭕

문제를 풀긴 했지만 개념을 완전히 이해하고 있지 않았음을 깨달았다.
루트 노드를 구하고 parent배열을 따로 두는 이유는 인접리스트 또는 인접행렬 방식으로 그래프를 그리지 않기 때문이다.
루트 노드와 parent배열을 만드는 것 자체가 간선이고 그래프이다.
*/

const path = require("path");

let [firstLine, ...operation] = require("fs")
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

let parent = new Array(N + 1).fill(0);

for (i in parent) {
  parent[i] = +i;
}

for (let i = 0; i < M; i++) {
  const [oper, a, b] = operation[i].split(" ").map(Number);

  if (oper === 0) unionParent(parent, a, b);
  else {
    findParent(parent, a) === findParent(parent, b)
      ? console.log("YES")
      : console.log("NO");
  }
}
