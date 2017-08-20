// Implement the quickSort algorithm

function pivot(arr, comparator, start=0, end=arr.length - 1) {
  if (typeof comparator !== 'function') {
    comparator = (a,b) => a-b;
  }
  var pivot = arr[start];
  var swapIndex = start;
  for (var i = start; i <= end; i++) {
    if (comparator(arr[i], pivot) <= 0) {
      [arr[i],arr[swapIndex]] = [arr[swapIndex],arr[i]];
      swapIndex++;
    }
  }
  [arr[swapIndex-1],arr[start]] = [arr[start],arr[swapIndex-1]];
  return swapIndex-1;
}

function quickSort(arr, comparator, left=0, right=arr.length - 1) {
  if (typeof comparator !== 'function') {
  comparator = (a,b) => a-b;
  }
  if(left - right < 0) {
    let pivotIndex = pivot(arr, comparator, left, right);
    quickSort(arr, comparator, left, pivotIndex - 1);
    quickSort(arr, comparator, pivotIndex + 1, right);
  }
  return arr;
}
