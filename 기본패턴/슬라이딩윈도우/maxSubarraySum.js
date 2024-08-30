/**
 * maxSubarraySum: arr에서 길이가 num인 연속된 하위 배열 중에 최대 합을 반환하는 함수
 *
 * @param {array} arr - 정수 배열
 * @param {number} num - 양의 정수
 * @returns {number | null} 길이가 num인 연속 배열의 최대 합 (num이 arr의 길이보다 길다면 null을 반환)
 * @timeComplexity O(N)
 * @spaceComplexity O(1)
 */

/*
1. arr[0] + arr[1] + ... + arr[num - 1] 까지의 합을 구한다. = sum
2. Math.max(sum, sum - arr[0] + arr[num]) = sum
3. Math.max(sum, sum - arr[1] + arr[num + 1]) = sum
4. Math.max(sum, sum - arr[2] + arr[num + 2]) = sum
이 과정을 배열의 마지막 원소까지 반복한다.
*/
function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let sum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    sum += arr[i];
  }
  tempSum = sum;

  for (let start = 0, end = num; end < arr.length; start++, end++) {
    tempSum = tempSum - arr[start] + arr[end];
    sum = Math.max(sum, tempSum);
  }

  return sum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
