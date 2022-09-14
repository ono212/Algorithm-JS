/*
2022-09-14
프로그래머스 https://school.programmers.co.kr/learn/courses/30/lessons/42839
해결 ❌

<1.만들 수 있는 숫자들 구하기>
: 순열을 사용하여 모든 숫자의 조합을 구한다.
[주의해야할 부분]
🛑 제일 앞자리에 0이 올 경우 : Number()를 사용하여 Number로 변환해주면 제일 앞의 0은 자동으로 생략하여 숫자를 반환한다.
🛑 중복인 숫자를 걸러내는 방법 : 모든 숫자를 소수 판별한 후에 Set로 변환해주면 중복이 제거된다.

<2.소수 판별>
숫자 n이 소수인지 확인하는 방법
: 2 ~ n의 제곱근 까지의 숫자로 n을 나눠서 나눠 떨어지는지 확인
나눠 떨어지면 소수가 아니다.
*/
function checkPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// 순열
function permutation(arr, num) {
  const res = [];

  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
    const permutations = permutation(rest, num - 1);
    const attach = permutations.map((permutation) => [v, ...permutation]);

    res.push(...attach);
  });
  return res;
}

function solution(numbers) {
  var answer = 0;
  const allNumbers = [];
  numbers = numbers.split("").map(Number);

  for (let i = 1; i < numbers.length + 1; i++)
    allNumbers.push(...permutation(numbers, i).map((e) => Number(e.join(""))));

  const allNumbersSet = new Set(allNumbers);

  allNumbersSet.forEach((num) => {
    if (checkPrime(num)) answer++;
  });

  return answer;
}

console.log(solution("17")); // 3
console.log(solution("011")); // 2
