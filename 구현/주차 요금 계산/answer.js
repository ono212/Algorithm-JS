/*
2022-09-13
프로그래머스 https://school.programmers.co.kr/learn/courses/30/lessons/92341
해결 ⭕

(!!주의!!) 기본요금은 1번만 적용된다
출차 기록이 없는 차량은 23:59분에 출차한 것으로 간주한다.

제한시간 : 정확성 테스트 - 10초
*/

function solution(fees, records) {
  var answer = [];
  const IN = "IN";
  const OUT = "OUT";

  let recordsDic = {};

  records.forEach((record) => {
    let [time, carNum, action] = record.split(" ");
    let [hour, min] = time.split(":");

    if (!recordsDic[carNum]) recordsDic[carNum] = []; // 또는 if (carNum in recordsDic)으로 확인

    if (action === IN) recordsDic[carNum].push(time);
    else if (action === OUT) {
      let [inHour, inMin] = recordsDic[carNum].pop().split(":");

      if (recordsDic[carNum].length > 0)
        recordsDic[carNum][0] += +hour * 60 + +min - (+inHour * 60 + +inMin);
      else recordsDic[carNum].push(+hour * 60 + +min - (+inHour * 60 + +inMin));
    }
  });

  const ordered = Object.keys(recordsDic).sort();

  for (let key of ordered) {
    let restTime = 0;
    let money = 0;

    recordsDic[key].forEach((el) => {
      if (typeof el === "string") {
        let [hour, min] = el.split(":");
        restTime += 23 * 60 + 59 - (+hour * 60 + +min);
      } else restTime += el;
    });

    if (parseInt(restTime / fees[0]) >= 1) {
      restTime -= fees[0];
      money += fees[1] + Math.ceil(restTime / fees[2]) * fees[3];
    } else money = fees[1];

    answer.push(money);
  }

  return answer;
}

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      "05:34 5961 IN",
      "06:00 0000 IN",
      "06:34 0000 OUT",
      "07:59 5961 OUT",
      "07:59 0148 IN",
      "18:59 0000 IN",
      "19:09 0148 OUT",
      "22:59 5961 IN",
      "23:00 5961 OUT",
    ]
  )
); // [14600, 34400, 5000]
