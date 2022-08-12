/*
2022-08-12
백준 : https://www.acmicpc.net/problem/9046
해결 ⭕
*/
const path = require("path");
let [N, ...strings] = require("fs")
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .trim()
  .split("\n");

N = +N;

let i = 0;

while (i < N) {
  let str = strings[i];

  let check_str = {};

  [...str].forEach((letter) => {
    if (letter !== " ") {
      check_str[letter] === undefined
        ? (check_str[letter] = 1)
        : check_str[letter]++;
    }
  });

  let max_num = Math.max(...Object.values(check_str));

  let str_num = 0;
  let max_str;

  for (let letter in check_str) {
    if (check_str[letter] === max_num) {
      str_num++;
      max_str = letter;
    }
  }

  if (str_num > 1) console.log("?");
  else console.log(max_str);

  i++;
}
