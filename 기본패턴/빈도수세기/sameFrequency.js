/**
 * sameFrequency: num1과 num2를 비교하여, num1이 가지고 있는 수와 num2가 가지고 있는 수의 빈도가 같은지 판별하는 함수
 *
 * @param {string} num1 - 첫 번째 양의 정수
 * @param {string} num2 - 두 번째 양의 정수
 * @returns {boolean} 자릿수가 같다면 true, 아니면 false
 * @complexity O(N)
 */

/*
숫자를 순회하려면 어떻게 해야할까? 문자로 변환해서 순회하는 게 가장 좋은 방법일까? 일단 문자로.
1. num1과 num2를 각각 문자로 변환한다. String(num1)
2. num1의 자릿수를 저장할 객체를 만든다. frequency_num1 (key: 숫자, value: 숫자가 num1에 출현한 개수)
3. num1을 처음부터 하나씩 순회하며 frequency_num1객체에 각 개수를 저장한다.
4. num2의 문자를 처음부터 하나씩 순회한다.
    frequency_num1[num2 순회 숫자]가 있다면, frequency_num1[num2 순회 숫자]--;
    frequency_num1[num2 순회 숫자]가 없다면 바로 false를 반환한다.
5. 4번에서 false를 반환하지 않았다면 true를 반환한다.
*/
function sameFrequency(num1, num2) {
  const num1_string = String(num1);
  const num2_string = String(num2);
  const frequency_num1 = {};

  for (const num of num1_string) {
    frequency_num1[num] = (frequency_num1[Number(num)] || 0) + 1;
  }

  for (const num of num2_string) {
    if (frequency_num1[num]) frequency_num1[num]--;
    else return false;
  }

  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
