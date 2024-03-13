/*
2023-09-08
백준 : https://school.programmers.co.kr/learn/courses/15008/lessons/121684?language=javascript
해결 ❌

한 종목 당 1명의 대표.
한 학생은 두 개 이상의 종목에 대해 대표할 수 없다.

목표: "해당 종목에 대한 능력치의 합을 최대화하는 것"
output: 해당 종목에 대한 능력치 합의 최대값

모든 경우의 수를 고려해야한다.
순열과 dfs를 활용했다.
selectdStudents배열에 뽑힌 학생의 인덱스를 저장한다.
selectdStudents배열의 인덱스는 종목의 인덱스와 같다.
*/
function solution(ability) {
  var answer = 0;
  const studentNum = ability.length;
  const eventNum = ability[0].length;
  const selectedStudents = [];

  const DFS = (selectedNum, selectedStudents) => {
    if (selectedNum === eventNum) {
      let sum = 0;

      for (let i = 0; i < eventNum; i++) {
        sum += ability[selectedStudents[i]][i];
      }
      answer = Math.max(answer, sum);
      return;
    } else {
      for (let i = 0; i < studentNum; i++) {
        if (selectedStudents.indexOf(i) === -1) {
          selectedStudents.push(i);
          DFS(selectedNum + 1, selectedStudents);
          selectedStudents.pop();
        }
      }
    }
  };

  DFS(0, selectedStudents);

  return answer;
}

console.log(
  solution([
    [40, 10, 10],
    [20, 5, 0],
    [30, 30, 30],
    [70, 0, 70],
    [100, 100, 100],
  ])
); // 210
