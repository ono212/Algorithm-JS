function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] < target) left = mid + 1;
    else if (array[mid] > target) right = mid - 1;
    else return mid;
  }

  // target이 배열에 존재하지 않으면 -1 반환
  return -1;
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 9));
