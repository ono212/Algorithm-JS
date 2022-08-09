/*
2022-08-09
https://www.acmicpc.net/problem/2606
해결 ⭕
*/
const path = require("path");
let [N, connection, ...input] = require("fs")
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .trim()
  .split("\n");

N = +N;

const graph = Array.from({ length: N + 1 }, () => new Array(0));
const visitied = new Array(N + 1).fill(false);

for (let i = 0; i < connection; i++) {
  let [a, b] = input[i].split(" ").map(Number);

  graph[a].push(b);
  graph[b].push(a);
}

const dfs = (start) => {
  const stack = [start];
  visitied[start] = true;
  let answer = 0;

  while (stack.length > 0) {
    let now = stack.pop();

    for (let i = 0; i < graph[now].length; i++) {
      let next = graph[now][i];

      if (visitied[next]) continue;
      else {
        answer++;
        stack.push(next);
        visitied[next] = true;
      }
    }
  }

  return answer;
};

console.log(dfs(1)); // 4
