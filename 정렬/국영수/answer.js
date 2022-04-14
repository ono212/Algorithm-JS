/*
2022-04-14
백준 : https://www.acmicpc.net/problem/10825
해결 ❌

아예 sort함수를 이용해 볼 생각조차 못했다,,^^...
sort공부를 더 자유자재로 쓸 수 있도록 이해가 필요하다.
아직 좀 헷갈린다..!
*/

/*
정렬 기준
1. 국어 점수가 감소하는 순서로
2. 국어 점수가 같으면 영어 점수가 증가하는 순서로
3. 국어 점수와 영어 점수가 같으면 수학 점수가 감소하는 순서로
4. 모든 점수가 같으면 이름이 사전 순으로 증가하는 순서로 (단, 아스키 코드에서 대문자는 소문자보다 작으므로 사전순으로 앞에 온다.)
*/

const path = require("path");

let [N, ...scoreList] = require("fs")
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .trim()
  .split("\n");

scoreList = scoreList.map((student) => {
  const [name, kor, eng, math] = student.split(" ");

  return {
    name: name,
    kor: +kor,
    eng: +eng,
    math: +math,
  };
});

const sortScore = (a, b) => {
  if (a.kor !== b.kor) return b.kor - a.kor; // 1. 국어 : 내림차순
  else if (a.eng !== b.eng) return a.eng - b.eng; // 2. 영어 : 오름차순
  else if (a.math !== b.math) return b.math - a.math; // 3. 수학 : 내림차순
  else return a.name < b.name ? -1 : a.name > b.name ? 1 : 0; // 4. 이름 사전순 증가(오름차순)
};

const answer = scoreList.sort(sortScore).map((student) => student.name);

console.log(answer.join("\n"));
