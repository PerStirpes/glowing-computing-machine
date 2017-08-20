// Given an array of numbers, return true if all of the numbers are in 
// ascending order, otherwise return false.


function inAscOrder(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i-1]) return false;
  }
  return true;
}
