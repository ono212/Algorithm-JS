/*
2022-09-13
프로그래머스 https://school.programmers.co.kr/learn/courses/30/lessons/42885
해결 ❌

무게를 내림차순 정렬해서 무거운 사람부터 처리해야하는 것은 떠올렸는데 가장 낮은 무게와 매치해나가는 것은 떠올리지 못했다..
*/

function solution(people, limit) {
  var answer = 0;

  // 내림차순 정렬
  people.sort((a, b) => b - a);

  for (var i = 0, j = people.length - 1; i <= j; i++, answer++)
    if (people[i] + people[j] <= limit) j--;

  return answer;
}

console.log(solution([70, 50, 80, 50], 100)); // 3
console.log(solution([70, 80, 50], 100)); // 3
