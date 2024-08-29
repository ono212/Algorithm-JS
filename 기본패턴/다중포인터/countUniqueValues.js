/**
 * countUniqueValues: arr배열에서 고유한 숫자의 개수를 세서 반환하는 함수
 *
 * @param {array} arr - 오름차순으로 정렬된 정수 배열
 * @returns {number} 자릿수가 같다면 true, 아니면 false
 * @timeComplexity O(N)
 * @spaceComplexity O(N)
 */

/*
1. 0번째를 가리키는 포인터: left, 1번째를 가리키는 포인터: right, count: 배열의 고유한 숫자의 개수
2. while문으로 right가 가장 마지막 원소를 가리킬 때까지만 수행한다.
3. arr[left] !== arr[right] 라면, left를 right 위치로 이동시킨다. count++
   같다면, right의 위치만 뒤로 한칸 이동시킨다.
*/
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let left = 0;
  let right = 1;
  let count = 1;

  while (right < arr.length) {
    if (arr[left] !== arr[right]) {
      left = right;
      count++;
    }

    right++;
  }

  return count;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
