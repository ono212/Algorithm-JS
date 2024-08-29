/**
 * areThereDuplicates: 전달된 인자 중에 중복이 있는지 판별하는 함수
 *
 * @param {} param의 개수가 가변적
 * @returns {boolean} 전달된 인자 중에 중복이 있으면 true, 없으면 false
 * @complexity O(N)
 */

/*
1. frequency객체는 argements배열의 인자의 고유 개수를 체크하는 객체이다. (key: 인자, value: true)
2. arguments배열을 순회한다.
    frequency[arguments[i]]가 존재하면 return true
    없으면 frequency[arguments[i]] = true을 할당한다.
3. 순회가 정상적으로 끝나면 return false
*/
function areThereDuplicates() {
  const frequency = {};

  for (let i = 0; i < arguments.length; i++) {
    let argument = arguments[i];
    if (frequency[argument]) return true;
    else frequency[argument] = true;
  }

  return false;
}

/*
시간복잡도: O(nlogn), 공간복잡도: O(1)인 더 성능이 좋은 답
*/
function areThereDuplicates_improved() {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
