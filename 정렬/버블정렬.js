/*
1. 버블정렬을 한 번 실행하면 제일 큰 값이 배열의 끝 자리에 배치된다.
2. 그 다음 버블정렬을 실행하면 (1번에서 정렬한 제일 큰 값을 제외하고) 제일 큰 값을 찾아 정렬한다.
이 과정을 반복한다.
내부 for문에서 j < i - 1인 이유는 이미 정렬한 끝 값들을 다시 연산하지 않기 위해서이다. (최적화)
*/
function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);
