/*
stack을 사용하지 않고 방문처리만으로 구현한 방법이다!
사용하는 메모리와 시간 측면에서 더 효율적이다.
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

visitied[1] = true;
let answer = 0;

const dfs = (start) => {
  for (const link of graph[start]) {
    if (visitied[link] === false) {
      visitied[link] = true;
      answer++;
      dfs(link);
    }
  }
};

dfs(1);
console.log(answer); // 4
