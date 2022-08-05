/*
2022-08-04
프로그래머스 : https://school.programmers.co.kr/learn/courses/30/lessons/1844
해결 ⭕

bfs는 최단거리를 보장한다. 이미 더 빠른 경로로 A라는 지점에 도착해서 값을 갱신해놓는다.
방문하면 값을 갱신하기 때문에 따로 visited배열을 사용하지 않고 값이 1이 아닌지를 확인하는 방식으로 방문 여부를 체크한다.

X와 Y값을 반대로 사용해서 오류가 났다..이런 실수 그만...
*/
function solution(maps) {
  var answer = 0;

  const X = maps.length;
  const Y = maps[0].length;
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const bfs = (now_x, now_y) => {
    const queue = [[now_x, now_y]];

    while (queue.length) {
      let [x, y] = queue.shift();

      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];

        // 좌표를 벗어나는 경우 X
        if (nx < 0 || nx >= X || ny < 0 || ny >= Y) continue;

        // 벽이거나 이미 방문한 좌표일 경우 X
        if (maps[nx][ny] !== 1) continue;

        //✅ 1일 때만!
        maps[nx][ny] = maps[x][y] + 1;
        if (nx === X - 1 && ny === Y - 1) break;
        queue.push([nx, ny]);
      }
    }
    return maps[X - 1][Y - 1];
  };

  answer = bfs(0, 0);

  return answer === 1 ? -1 : answer;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
); // 11

/*
console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
); // -1
*/
