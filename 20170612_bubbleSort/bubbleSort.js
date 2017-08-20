// Implement the bubble sort algorithm

function bubbleSort(arr, comparator) {
  if (typeof comparator !== 'function') {
    comparator = (a,b) => a - b;
  }
  
  var end = arr.length - 1;
  var tempI;

  while(end > 0) {
    for (var i=0; i < end; i++) {
      if(comparator(arr[i],arr[i+1]) > 0) {
        tempI = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = tempI;
      }
    }
    end--;
  }
  return arr;
}
