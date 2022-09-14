/*
2022-09-13
프로그래머스 https://school.programmers.co.kr/learn/courses/30/lessons/87946
해결 ❌

방문할 수 있는 모든 순서를 탐색해야하므로 완전 탐색해야한다.
방문한 던전의 개수를 depth로 두고 재귀dfs로 완전 탐색한다.

참조
https://velog.io/@duboo/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-Level-2-%ED%94%BC%EB%A1%9C%EB%8F%84-JS
*/

function solution(k, dungeons) {
  var answer = 0;

  const visited = new Array(dungeons.length).fill(false);

  // fatigue: 피로도, count: 현재 방문한 던전의 개수
  const dfs = (fatigue, count) => {
    answer = Math.max(count, answer);

    if (answer === dungeons.length) return;

    for (let i = 0; i < dungeons.length; i++) {
      let [minRequired, used] = dungeons[i];

      if (fatigue >= minRequired && visited[i] === false) {
        visited[i] = true;
        dfs(fatigue - used, count + 1);
        visited[i] = false;
      }
    }
  };

  dfs(k, 0);

  return answer;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
); // 3
