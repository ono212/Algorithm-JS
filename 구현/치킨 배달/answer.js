/*
2022-07-01
백준 : https://www.acmicpc.net/problem/15686
해결 ❌

빈 칸(0), 집(1), 치킨집(2)
치킨 거리 : 집과 가장 가까운 치킨집 사이의 거리
목표(출력값) : 도시의 치킨 거리 최소화
최대 M개인 거니까 M개 이하여도 된다. 그니까 치킨집은 최대 M개만 있어야 하는 것.

그럼 치킨집을 안없애도 되는지?? -> 안없애도 되지.
근데 생각해보니까 치킨집이 M개일 때보다 M-1개일 때 작은 치킨 거리를 가질 리가 없다. 같으면 같았지!
그래서 M개의 조합일 때만 계산해도 되는 듯! 

참조 : https://velog.io/@ywc8851/%EB%B0%B1%EC%A4%80-15686-%EC%B9%98%ED%82%A8-%EB%B0%B0%EB%8B%AC-javascripthttps://velog.io/@ywc8851/%EB%B0%B1%EC%A4%80-15686-%EC%B9%98%ED%82%A8-%EB%B0%B0%EB%8B%AC-javascript
*/
const path = require("path");
let [input, ...city] = require("fs")
  .readFileSync(path.resolve(__dirname, "./input1.txt"))
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.split(" ").map(Number);
city = city.map((line) => line.split(" ").map(Number));

const house = [];
const chicken = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (city[i][j] === 1) house.push([i, j]);
    else if (city[i][j] === 2) chicken.push([i, j]);
  }
}

const getMinDistance = () => {
  let sum = 0;
  house.forEach(([hx, hy]) => {
    let min = Infinity;
    chicken.forEach((_, index) => {
      if (check[index] === true) {
        const [cx, cy] = chicken[index];
        min = Math.min(min, Math.abs(hx - cx) + Math.abs(hy - cy));
      }
    });
    sum += min;
  });
  return sum;
};

const check = new Array(chicken.length).fill(false);
let answer = Infinity;

const DFS = (idx, cnt) => {
  if (cnt === m) {
    answer = Math.min(answer, getMinDistance());
    return;
  } else {
    for (let i = idx; i < chicken.length; i++) {
      if (check[i] === true) continue;
      check[i] = true;
      DFS(i, cnt + 1);
      check[i] = false;
    }
  }
};

DFS(0, 0);
console.log(answer);
