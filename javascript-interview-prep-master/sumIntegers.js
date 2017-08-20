function sumIntegers(arr) {
  var intArray = [];
  var sum;
  var largestInt = 0;

  //to find the largestInt
  for (var l = 0; l < arr.length; l++) {
    if (arr[l] > largestInt) {
      largestInt = arr[l];
    }
  }

// add up the other ints and compare to the largestInt
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] + arr[i+1] == largestInt) {
      return true;
    }
  }

  return false;

}

console.log(sumIntegers([1,2,3,4,5,6,7]));
