/*
2022-04-07
이코테 197p
해결⭕

✅ else문에서 return문 빼먹지 말기
✅ components, request 재할당해주기 때문에 let으로 선언하기
*/

/* 해결 방법
1. 동빈이네 부품 배열(components) 오름차순 정렬
2. 이진 탐색
*/

const path = require("path");

let [N, components, , request] = require("fs")
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .trim()
  .split("\n");

components = components.split(" ").map(Number);
request = request.split(" ").map(Number);

const binary_search = (arr, target, start, end) => {
  if (start > end) return "no";

  mid = parseInt((start + end) / 2);

  if (arr[mid] === target) return "yes";
  else if (arr[mid] > target) return binary_search(arr, target, start, mid - 1);
  else return binary_search(arr, target, mid + 1, end);
};

components.sort();

for (const target of request) {
  let result = binary_search(components, target, 0, +N - 1);

  process.stdout.write(result + " ");
}
