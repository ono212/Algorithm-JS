/*
2023-11-08
백준 : https://www.acmicpc.net/problem/2745
해결 ⭕
*/

const path = require("path");

let input = require("fs")
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .trim();

let [N, B] = input.split(" ");
B = +B;

const obj = { A: 10 };
let n_length = N.length - 1;
let answer = 0;

const convertAlphabetToNumber = (alphabet) => {
  let gap = alphabet.charCodeAt() - "A".charCodeAt();
  let number = 10 + gap;

  obj[alphabet] = number;

  return number;
};

for (let i = 0; i <= n_length; i++) {
  let num = N[i];
  let digits = n_length - i; // 자릿수
  let convertedNum = num;

  // 알파벳일 경우 숫자로 변환해준다.
  if (isNaN(num)) {
    if (obj[num]) convertedNum = obj[num];
    else convertedNum = convertAlphabetToNumber(num);
  }

  convertedNum *= Math.pow(B, digits);
  answer += convertedNum;
}

console.log(answer);
