/*
2022-04-12
백준 : https://www.acmicpc.net/problem/1062
해결 ❌

시간초과와 메모리초과가 계속 났다,,,,

참조 : https://parkparkpark.tistory.com/113
*/

const path = require("path");

let input = require("fs")
  .readFileSync(path.resolve(__dirname, "./input4.txt"))
  .toString()
  .trim()
  .split("\n");
const [N, K] = input.shift().split(" ").map(Number);
const words = ["a", "n", "t", "i", "c"];
input = input.map((v) => v.slice(4, v.length - 4));

const combinations = function* (elements, selectNumber) {
  for (let i = 0; i < elements.length; i++) {
    if (selectNumber === 1) {
      yield [elements[i]];
    } else {
      const fixed = elements[i];
      const rest = elements.slice(i + 1);

      for (const a of combinations(rest, selectNumber - 1)) {
        yield [fixed, ...a];
      }
    }
  }
};

const filterWords = (arr) => {
  return arr.map((v) => {
    const word = [...new Set(v.split(""))].filter(
      (ele) => !words.includes(ele)
    );
    return word;
  });
};

if (K < 5) {
  console.log(0);
} else if (K === 5) {
  const filterWord = filterWords(input);
  console.log(filterWord.filter((v) => v.length === 0).length);
} else {
  const filterWord = filterWords(input);
  const flatWord = [...new Set(filterWord.flat())];

  let answer = 0;

  if (K > [...flatWord, ...words].length) {
    console.log(N);
  } else {
    for (let ele of combinations(flatWord, K - 5)) {
      const str = [...words, ...ele];
      let count = 0;
      Loop: for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
          if (!str.includes(input[i][j])) {
            continue Loop;
          }
        }
        count++;
      }
      answer = Math.max(answer, count);
    }

    console.log(answer);
  }
}
