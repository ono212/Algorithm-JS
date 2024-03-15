// 이중 for문을 사용하는게 코드가 더 깔끔한 것 같다.👍🏻

const path = require("path");
let strings = require("fs")
  .readFileSync(path.resolve(__dirname, "./input2.txt"))
  .toString()
  .trim()
  .split("\n");

const board = [];
let max_X = 0;
let answer = "";

strings.forEach((string) => {
  string = string.trim();
  board.push(string.split(""));
  max_X = Math.max(string.length, max_X);
});

const max_Y = board.length;

for (let x = 0; x < max_X; x++) {
  for (let y = 0; y < max_Y; y++) if (board[y][x]) answer += board[y][x];
}

console.log(answer);
