// Implement the insertion sort algorithm

function insertionSort(arr, comparator) {
  if (typeof comparator !== 'function') {
    comparator = (a,b) => a-b;
  }
  for (let i=1; i<arr.length; i++) {
    for (let j=0; j<i; j++) {
      if(comparator(arr[i],arr[j]) < 0) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
