/*
2023-10-12
백준 : https://www.acmicpc.net/problem/10798
해결 ⭕
*/

/*
[풀이 방법]
1. 이차원 배열로 입력을 받는다.
2. 첫번째 세로 인덱스부터 가로 인덱스를 하나씩 증가시켜나가며 문자열을 누적한다.
    - 만약 값이 존재하지 않는 경우 다음 세로 인덱스로 건너뛴다.
    2-1. [0][0]부터 탐색을 시작한다.
    2-2. [1][0] 문자를 확인한다.
    ...
    2-3. [이차원 배열의 길이][0]까지 확인한다. 즉, 세로 인덱스가 === 이차원 배열의 길이가 되면 탐색을 끝낸다.
3. 가로 인덱스를 1 증가시킨 후, [가로 인덱스][0]의 값이 존재할 경우, 2번의 과정을 반복한다.
    
*/
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

let x = 0;
let y = 0;

while (y < max_Y && x < max_X) {
  if (board[y][x]) answer += board[y][x];
  y++;

  if (y === max_Y) {
    y = 0;
    x++;
  }
}

console.log(answer);
