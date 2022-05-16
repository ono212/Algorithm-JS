/*
2022-05-16
이코테 303p
해결 ⭕

💫위상 정렬 문제
result : 각 강의(자신 포함)를 들을 때까지 걸리는 최소 시간을 담는 배열
time : 각 강의 시간을 담는 배열
*/
const path = require("path");

let [N, ...nodes] = require("fs")
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .trim()
  .split("\n");

N = +N;

let graph = Array.from(Array(N + 1), () => new Array());
let indegree = Array(N + 1).fill(0);
let time = Array(N + 1).fill(0);
let result = Array(N + 1).fill(0);

// 형태 : 각 강의의 강의 시간, 선수 과목들 번호, -1
for (let i = 0; i < nodes.length; i++) {
  const [hour, ...prerequisites] = nodes[i].split(" ").map(Number);

  prerequisites.pop(); // -1을 없애주기 위해서

  indegree[i + 1] += prerequisites.length;
  time[i + 1] = hour;

  prerequisites.forEach((subject) => {
    graph[subject].push(i + 1); // graph[subject] = [...graph[subject], i + 1];
  });
}

const topology_sort = () => {
  let queue = [];

  for (let i = 1; i < N + 1; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  while (queue.length) {
    let now = queue.shift();

    result[now] += time[now];

    for (let j = 0; j < graph[now].length; j++) {
      result[graph[now][j]] = result[now];
      indegree[graph[now][j]] -= 1;

      if (indegree[graph[now][j]] === 0) queue.push(graph[now][j]);
    }
  }
};

topology_sort();

for (let i = 1; i < N + 1; i++) {
  console.log(result[i]);
}
