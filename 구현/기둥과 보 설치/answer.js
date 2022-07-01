/*
2022-06-24
프로그래머스 : https://programmers.co.kr/learn/courses/30/lessons/60061
해결 ❌

시간 제한 : 5초
[ 기둥과 보의 가능한 위치 ] 설치 후에?
기둥 : 바닥 위, 보의 한쪽 끝 부분 위, 다른 기둥 위
보 : 한쪽 끝부분이 기둥 위, 양쪽 끝 부분이 다른 보와 동시에 연결 

참조 : https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.3-%EA%B8%B0%EB%91%A5%EA%B3%BC-%EB%B3%B4-%EC%84%A4%EC%B9%98-JS
*/
/*
삭제나 삽입을 먼저 한 후에 -> 구조물이 정상인지 확인하기.
전체 명령의 개수가 1000개 이하이기 때문에, 모든 구조물을 매번 확인하는 방식으로 작성할 수 있다.

예제는 정렬을 그냥 오름차순으로 해도 통과하지만, 기둥과 보 모두 같은 경우도 똑바로 정렬해줘야 모든 테케를 통과할 수 있다.
=> 정렬 조건도 꼼꼼히 읽기.
*/

// 구조물이 정상인지 확인하는 함수. 모든 구조물을 돌며 확인한다.
function possible(ans) {
  for (const frame of ans) {
    let [x, y, stuff] = frame;

    // 기둥
    if (stuff === 0) {
      if (y === 0) continue;
      else if (ans.find(([a, b, s]) => a === x - 1 && b === y && s === 1))
        continue;
      else if (ans.find(([a, b, s]) => a === x && b === y && s === 1)) continue;
      else if (ans.find(([a, b, s]) => a === x && b === y - 1 && s === 0))
        continue;
      return false;
    }
    // 보
    else {
      if (ans.find(([a, b, s]) => a === x && b === y - 1 && s === 0)) continue;
      else if (ans.find(([a, b, s]) => a === x + 1 && b === y - 1 && s === 0))
        continue;
      else if (
        ans.find(([a, b, s]) => a === x - 1 && b === y && s === 1) &&
        ans.find(([a, b, s]) => a === x + 1 && b === y && s === 1)
      )
        continue;
      return false;
    }
  }
  return true;
}

function solution(n, build_frame) {
  var answer = [];

  for (const frame of build_frame) {
    let [x, y, stuff, operation] = frame;

    if (operation === 1) {
      answer.push([x, y, stuff]);
      if (!possible(answer)) answer.pop();
    } else {
      /* 삭제 작업일 경우
      1. 삭제해도 되는지 여부 확인 (삭제해도 될지를 판단하는 게 더 빠를 것 같다.)
      2. 되면 삭제, 안되면 건너뜀.
      아니다.. 삭제해도 될지 여부를 판단하는 일이 너무 힘들다. 답안처럼 모든 구조물을 돌며 확인하는 게 더 낫겠다..
      */

      // 삭제할 인덱스 찾기
      let index = answer.findIndex(
        ([a, b, s]) => a === x && b === y && s === stuff
      );
      answer.splice(index, 1);

      if (!possible(answer)) answer.push([x, y, stuff]);
    }
  }

  return answer.sort((a, b) =>
    a[0] === b[0] ? (a[1] === b[1] ? a[2] - b[2] : a[1] - b[1]) : a[0] - b[0]
  );
}

console.log(
  solution(5, [
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [2, 1, 0, 1],
    [2, 2, 1, 1],
    [5, 0, 0, 1],
    [5, 1, 0, 1],
    [4, 2, 1, 1],
    [3, 2, 1, 1],
  ])
);

console.log(
  solution(5, [
    [0, 0, 0, 1],
    [2, 0, 0, 1],
    [4, 0, 0, 1],
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [2, 1, 1, 1],
    [3, 1, 1, 1],
    [2, 0, 0, 0],
    [1, 1, 1, 0],
    [2, 2, 0, 1],
  ])
);
