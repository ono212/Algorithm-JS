/*
2022-05-18
이코테 312p
해결 ⭕
*/

/*
왼쪽과 오른쪽 숫자가 둘다 2 이상이면 곱하면 된다.
왼, 오 둘중에 0이나 1이 하나라도 있으면 더해야 한다.
*/

const path = require("path");

let S = require("fs")
  .readFileSync(path.resolve(__dirname, "./input1.txt"))
  .toString()
  .trim();

let answer = 0;

for (let i = 0; i < S.length; i++) {
  let num = +S[i];

  if (answer > 1 && num > 1) answer *= num;
  else answer += num;
}

console.log(answer);
