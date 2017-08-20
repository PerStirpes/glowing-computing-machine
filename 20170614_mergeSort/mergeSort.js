// Implement the merge sort algorithm

function mergeSort(arr, comparator) {
  if (typeof comparator !== 'function') {
    comparator = (a,b) => a-b;
  }
  if (arr.length === 0) return arr;
  var arrayOfArrays = [];
  function halve(array) {
    if (array.length > 0) {
      var firstHalf = array.slice(0,array.length/2);
      var secondHalf = array.slice(array.length/2, array.length);
    }
    if (firstHalf.length > 1) {
      halve(firstHalf);
    } else {
      arrayOfArrays.push(firstHalf);
    }
    if (secondHalf.length > 1) {
      halve(secondHalf);
    } else {
      arrayOfArrays.push(secondHalf);
    }
  }
  halve(arr);
  
  var firstArray, secondArray, newArray;

  while (arrayOfArrays.length > 1) {
    firstArray = arrayOfArrays.pop();
    secondArray = arrayOfArrays.pop();
    newArray = merge(firstArray,secondArray,comparator);
    arrayOfArrays.unshift(newArray);
  }
  return arrayOfArrays[0];
}
