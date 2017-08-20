/*
Given a sorted array, implement the following function:

// returns the index of the first occurrence of a given value in the array
// -1 if the value is not present
function findIndex(array, value) {}

Try to implement the function in O( log(n) ) runtime and constant space complexity.
*/

function findIndex(array, value) {
  var midPos = Math.floor(array.length/2);
  var midVal = array[midPos];
  var start = 0;
  var end = array.length-1;

  while (midVal !== value) {
    // check if out of bounds
    if (midPos < 0 || midPos > array.length-1 || midPos === undefined || start > end) { return -1; }

    // if value is to the left
    if (value < midVal) {
      start = start;
      end = midPos - 1;
      midPos = Math.floor((start + end)/2);
      midVal = array[midPos];  

    // if value is to the right
    } else if (value > midVal) {
      start = midPos + 1;
      end = end;
      midPos = Math.floor((start + end)/2);
      midVal = array[midPos];      
    }
  }
  for (var i=midPos; i>0; i--) {
    if (array[i-1] !== value) { return i; }
  }
  return 0;
}
