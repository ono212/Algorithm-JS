/*
2023-10-14
백준 : https://www.acmicpc.net/problem/14467
해결 ⭕
*/
/*
"소의 위치"를 N번 관찰
관찰 : (소의 번호, 소의 위치)
소 10마리
소의 위치 : 0(왼쪽), 1(오른쪽)

[output]
소가 최소 몇 번 길을 건넜는지?
=== 같은 번호의 소가 위치를 바꾼 횟수

[풀이]
모든 관찰을 순차적으로 하나씩 확인해야한다.

`소의 번호: 길 형태` 의 객체를 생성해서 길 업데이트
현재 길이 저장된 길과 다르면 카운트

1. 관찰배열을 순회한다.
2-1. 객체에 소의 번호 키가 없으면 키 만들면서 길 저장
2-2. 키가 있으면, 현재 값과 비교하여 다르면 카운트한 후에 값 업데이트

*/

const path = require("path");
let [N, ...observations] = require("fs")
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .trim()
  .split("\n");

const record = {};
let answer = 0;

observations.forEach((observation) => {
  let [cow_num, road_num] = observation.trim().split(" ");

  if (!record[cow_num]) {
    record[cow_num] = road_num;
  } else {
    if (record[cow_num] !== road_num) answer++;
    record[cow_num] = road_num;
  }
});

console.log(answer);
