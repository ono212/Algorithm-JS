/*
한 종목 당 1명의 대표.
한 학생은 두 개 이상의 종목에 대해 대표할 수 없다.

목표: "해당 종목에 대한 능력치의 합을 최대화하는 것"
output: 해당 종목에 대한 능력치 합의 최대값

언제 최대가 될까? 규칙이 있는 문제는 아닌 것 같다.
모든 경우의 수를 고려해야하는걸까?

모든 경우의 수를 고려해야한다.

*/

function solution(ability) {
  var answer = 0;
  const studentNum = ability.length;
  const eventNum = ability[0].length;
  const selectedStudents = new Array(studentNum).fill(false);
  const selectedEvents = new Array(eventNum).fill(false);

  /*
  석환-테니스, 영재-탁구, 인용-수영
                         정현-수영
                         준모-수영
              인용-탁구,  영재-수영
                          정현-수영
                          준모-수영
              정현-탁구,  영재-수영
                          인용-수영
                          준모-수영
  석환-탁구,   영재-테니스, 인용-수영
                          정현-수영
                          준모-수영
              인용-테니스,  영재-수영
                          정현-수영
                          준모-수영
              정현-테니스, 영재-수영
                          인용-수영
                          준모-수영
  석환-수영,  영재-테니스, 
  
  생각해보니까, 어떤 종목이 이미 뽑힌건지를 체크하지않고 있었는데, 이게 문제가 안되나? 그냥 순서로,,?
  */
  const DFS = (selectedNum, sum, selectedEvents, selectedStudents) => {
    if (selectedNum === eventNum) {
      answer = Math.max(answer, sum);
      return;
    } else {
      for (let i = 0; i < studentNum; i++) {
        // 이미 뽑힌 학생이라면 또 뽑을 필요가 없기 때문에 continue
        if (selectedStudents[i]) continue;

        for (let j = 0; j < eventNum; j++) {
          // 이미 뽑히지 않은 종목에 대해서만 뽑아야하기 때문에
          if (!selectedEvents[j]) {
            selectedStudents[i] = true;
            selectedEvents[j] = true;
            console.log("학생", i, selectedStudents);
            DFS(
              selectedNum + 1,
              sum + ability[i][j],
              selectedEvents,
              selectedStudents
            );
            selectedStudents[i] = false;
            selectedEvents[j] = false;
          }
        }
      }
    }
  };

  DFS(0, 0, selectedEvents, selectedStudents);

  return answer;
}

/*
console.log(
  solution([
    [40, 10, 10],
    [20, 5, 0],
    [30, 30, 30],
    [70, 0, 70],
    [100, 100, 100],
  ])
); // 210
*/

console.log(
  solution([
    [20, 30],
    [30, 20],
    [20, 30],
  ])
); // 60
