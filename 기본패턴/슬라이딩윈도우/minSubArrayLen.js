/**
 * minSubArrayLen: arr에서 합이 targetSum을 만족하는 하위 배열의 최소 길이를 반횐하는 함수
 *
 * @param {array} arr - 양수 배열
 * @param {number} targetSum - 양의 정수
 * @returns {number} 하위 배열의 합이 targetSum을 만족하는 최소 길이 (없다면 0을 반환)
 * @timeComplexity O(N)
 * @spaceComplexity O(1)
 */

/*
[ 2, 3, 1 , 2, 4 ,3], 7
  1         1        o
     1      1        x
     1        1      o
        1     1      o
           1  1      x
           1     1   o
              1  1   o
  찾으면 앞에 값만 빼고 체크 시작
  값이 작으면 뒤로 이동해서 더해주기

  2, 1, 6, 5, 4    9
  ;     ;          o
    ;   ;          x
    ;     ;        o
       ;  ;        o
          ;        x
          ; ;      o
            ;      x
            ; ;
*/

/*
1. 윈도우의 시작 인덱스: start, 윈도우의 끝 인덱스: end
2. 합이 num이상을 만족할 때까지 arr[0]부터 순회를 시작한다. (start = 0, end = 0) (종료조건: end === arr.length - 1)
3. 합이 num이상이 되면 start++ (start <= end 일 때까지) (start === end가 되면 end만 뒤로 한칸씩 이동시켜서 순회한다)
*/
function minSubArrayLen(arr, targetSum) {
  let start = 0;
  let end = 0;
  let minLen = Infinity;
  let sum = arr[start];

  while (end < arr.length && start < arr.length) {
    // 결국 sum은 현재 윈도우를 뜻한다. 현재 윈도우가 targetSum보다 작다면 윈도우를 오른쪽으로 확장
    if (sum < targetSum) {
      // 다음 end, sum갱신
      end++;
      sum = sum + arr[end];
    }
    // 현재 윈도우가 targetSum과 같거나 클 경우
    else {
      minLen = Math.min(minLen, end - start + 1);
      // 다음 start, sum 갱신
      sum = sum - arr[start];
      start++;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
