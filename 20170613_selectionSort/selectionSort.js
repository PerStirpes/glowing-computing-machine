// Implement the selection sort algorithm

function selectionSort(arr, comparator) {
  if (typeof comparator !== 'function') {
    comparator = (a,b) => a-b;
  }

  for (let i=0; i<arr.length; i++) {
    let min = arr[i];
    let minIdx = i;
    let change = false;
    
    for (let j=i+1; j<arr.length; j++) {
      if(comparator(arr[j], min) < 0) {
        min = arr[j];
        minIdx = j;
        change = true;
      }
    }
    if(change === true) {
      temp = arr[i];
      arr[i] = min;
      arr[minIdx] = temp;
    }
  }
  return arr;
}
