/**
 * averagePair: arr배열에서 원소 2개의 합의 평균이 targetAvg와 같은 원소 쌍이 있는지 판별하는 함수
 *
 * @param {array} arr - 오름차순으로 정렬된 정수 배열
 * @param {number} targetAvg - 목표 평균
 * @returns {number} 배열의 원소 2개의 합의 평균이 targetAvg와 같다면 true, 아니면 false
 * @timeComplexity O(N)
 * @spaceComplexity O(1)
 */

/*
1. 0번째를 가리키는 포인터: left, 마지막 원소를 가리키는 포인터: right, target = targetAvg * 2
2. while문으로 반복 (left === right이면 break)
   arr[left] + arr[right] === target 라면, return true
   아니라면, 
          arr[left] + arr[right] < target 라면, left++
          arr[left] + arr[right] > target 라면, right--
*/
function averagePair(arr, targetAvg) {
  let left = 0;
  let right = arr.length - 1;
  let target = targetAvg * 2;

  while (left < right) {
    if (arr[left] + arr[right] === target) return true;

    if (arr[left] + arr[right] < target) left++;
    else right--;
  }

  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
