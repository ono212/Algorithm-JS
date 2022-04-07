const binary_search = (arr, target, start, end) => {
  if (start > end) return null;

  // 중간점 구하기
  mid = parseInt((start + end) / 2);

  // # 타겟을 찾은 경우
  if (arr[mid] === target) return mid;
  // # 중간점이 더 큰 경우 : 중간점 이후 배열만 확인하면 된다. => 끝점 이동
  else if (arr[mid] > target) return binary_search(arr, target, start, mid - 1);
  // # 중간점이 더 작은 경우 : 중간점 이전 배열만 확인하면 된다. => 시작점 이동
  else return binary_search(arr, target, mid + 1, end);
};
