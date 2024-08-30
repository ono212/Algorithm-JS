/**
 * isSubsequence: str1의 문자 순서가 유지된채로 str2에 존재하는지 판별하는 함수
 *
 * @param {string} str1 - 첫 번째 문자열
 * @param {string} str2 - 두 번째 문자열
 * @returns {boolean} str1의 문자 순서가 유지된채로 str2에 존재하면 true, 그렇지 않으면 false
 * @timeComplexity O(N + M)
 * @spaceComplexity O(1)
 */

/*
1. str1의 첫 번째 문자를 가리키는 포인터 : left, str2의 첫 번째 문자를 가리키는 포인터: right
2. left와 right의 값이 같은지 비교한다. (right < str2.length)
   str1[left] === str2[right] 라면,
      left === str1.length - 1 라면, return true
      아니면 left++, right++
   다르다면, right++
3. while문이 정상적으로 종료됐다면 return false
*/
function isSubsequence(str1, str2) {
  let left = 0;
  let right = 0;

  while (right < str2.length) {
    if (str1[left] === str2[right]) {
      if (left === str1.length - 1) return true;
      else {
        left++;
        right++;
      }
    } else right++;
  }

  return false;
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)

// 다중포인터 방식은 아니지만 간단하게 해결하는 방법
function isSubsequence_easier(str1, str2) {
  let index = 0;

  for (const str of str2) {
    if (str === str1[index]) {
      index++;
    }
  }

  if (index === str1.length) return true;
  else return false;
}

// 다중포인터가 아닌 재귀로 해결하는 방법
function isSubsequence_recursion(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
}
