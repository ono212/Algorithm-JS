function binarySearch(array, target, left, right) {
  if (left > right) return -1;

  let mid = Math.floor((left + right) / 2);

  if (array[mid] < target) return binarySearch(array, target, mid + 1, right);
  else if (array[mid] > target)
    return binarySearch(array, target, left, mid - 1);
  else return mid;
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 103, 0, 7));
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 9, 0, 7));
