/**
 * validAnagram: str1과 str2를 비교하여 str2가 str1의 애너그램인지 판별하는 함수
 *
 * @param {string} str1 - 첫 번째 문자열
 * @param {string} str2 - 두 번째 문자열
 * @returns {boolean} str2가 str1의 애너그램이면 true, 아니면 false
 */

/*
1. str1에 나오는 문자의 개수를 체크할 객체를 만든다. frequency_str1 (key: 문자, value: 문자가 str1에 출현한 개수)
2. str1의 문자를 처음부터 하나씩 순회하며 frequency_str1객체에 각 개수를 저장한다.
3. str2의 문자를 처음부터 하나씩 순회한다.
    frequency_str1[str2문자]가 있다면, frequency_str1[str2문자]--;
    frequency_str1[str2문자]가 없다면 바로 false를 반환한다.
4. 3번에서 false를 반환하지 않았다면 true를 반환한다.
*/
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const frequency_str1 = {};

  for (const char of str1) {
    frequency_str1[char] = (frequency_str1[char] || 0) + 1;
  }

  for (const char of str2) {
    if (frequency_str1[char] > 0) frequency_str1[char]--;
    else return false;
  }

  return true;
}

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
