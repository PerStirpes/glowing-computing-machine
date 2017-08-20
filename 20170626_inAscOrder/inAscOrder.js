/*
 Implement a function called 

inAscOrder

Given an array of numbers, return true if all of the numbers 
are in ascending order, otherwise return false.

Examples:

inAscOrder([1,2,4,7,19]); // true 
inAscOrder([1,2,3,4,5]); // true 
inAscOrder([1,6,10,18,2,4,20]); // false 
inAscOrder([9,8,7,6,5,4,3,2,1]); // false
*/

function inAscOrder(arr) {
  i = 1;
  while (arr[i] > arr[i-1] && i <= (arr.length-1)) {
    i++;
  }
  return i === arr.length;
}
