/*
2023-11-02
프로그래머스 https://school.programmers.co.kr/learn/courses/15008/lessons/121683?language=javascript
해결 ⭕

1. 2회 나타나야 한다.
  => 문자열을 순회하면서 몇번 나타나는지 세줘야한다.
2. 2개 이상의 부분으로 나타나는지 확인해야 한다.
  => 덩어리로 나타나는 개수를 저장하는 객체 배열을 생성한다. (appearIndex)
     문자열을 순회한다.
     마지막 문자값과 같은지 확인한다.
      이전의 값과 다르다면, appearIndex[문자]++;
                          마지막 문자값을 현재 문자로 갱신.
      이전의 값과 같다면, 그냥 continue;
*/

function solution(input_string) {
  const answer = [];
  const strCount = {};
  const appearIndex = {};
  let lastStr = null;

  for (let i = 0; i < input_string.length; i++) {
    let str = input_string[i];

    strCount[str] = (strCount[str] || 0) + 1;

    if (lastStr === null || lastStr !== str) {
      appearIndex[str] = (appearIndex[str] || 0) + 1;

      lastStr = str;
    }
  }

  for (let str in appearIndex) {
    if (appearIndex[str] >= 2 && strCount[str] >= 2) answer.push(str);
  }

  return answer.length === 0 ? "N" : answer.sort().join("");
}

console.log(solution("edeaaabbccd")); //de
