/*
2023-11-02
프로그래머스 https://school.programmers.co.kr/learn/courses/19344/lessons/242258?language=javascript
해결 ⭕

t초동안 붕대를 감으면서 1초마다 x만큼의 체력 회복
t초 연속으로 붕대감기에 성공하면 y만큼의 체력 추가 회복
최대 체력
공격 당할 때는 체력 회복 불가
체력이 0이하가 되면 끝.

시전 시간의 의미 : 그 초동안 실행되는(?) 기술이라는 의미

붕대 감기는 매초 계속 알아서 실행되는 기술인가?
=> 1. 몬스터에게 공격당해 기술이 취소당하거나
   2. 기술이 끝나면
   => 그 즉시 붕대 감기를 다시 사용한다. 연속 성공 시간은 0으로 초기화
   3. 예시를 보면 바로 붕대 감기를 시작한다.

시간의 흐름에 따라 처리해주었다. 마지막 공격 후의 체력을 반환해야하므로 while문의 종료 조건은 마지막 공격 시간으로 지정했다.
*/
function solution(bandage, health, attacks) {
  var answer = 0;
  let time = 1;
  let maxHealth = health;
  let attackIndex = 0;
  let successCount = 0; // 연속 성공 횟수
  let [bandageTime, recovery, plusRecovery] = bandage;

  while (time <= attacks[attacks.length - 1][0]) {
    let [attackTime, damage] = attacks[attackIndex];

    if (time === attackTime) {
      health -= damage;
      successCount = 0;
      attackIndex++;
    } else {
      successCount++;

      if (successCount === bandageTime) {
        health = health + recovery + plusRecovery;
        successCount = 0;
      } else health += recovery;

      if (health > maxHealth) health = maxHealth;
    }

    if (health <= 0) return (answer = -1);

    time++;
  }

  return health;
}

console.log(
  solution([5, 1, 5], 30, [
    [2, 10],
    [9, 15],
    [10, 5],
    [11, 5],
  ])
); // 5
