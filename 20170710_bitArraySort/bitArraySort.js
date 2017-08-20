/*
Write a function called bitArraySort wich accepts an array of integers 
containing only 0's and 1's returns the same array back in sorted order. 
This should be done in place so be mindful of the following constraints below:

Time Complexity Constraint: O(N)
Space Complexity Constraint: O(1)

Hint: Do not use native sorting methods (you must solve this in O(n) time).

Input (Array): [0, 1, 1, 0, 1, 1, 0] 
Output (Array): [0, 0, 0, 1, 1, 1, 1]

Input (Array): [1, 1, 1, 0, 1]
Output (Array): [0, 1, 1, 1, 1]
*/

function bitArraySort(array) {
  let zeroCount = 0;
  for (let i=0; i < array.length; i++) {
    if (array[i] === 0) {
      zeroCount++;
    }
  }
  for (let i=0; i < array.length; i++) {
    array[i] = zeroCount > 0 ? 0 : 1;
    zeroCount--;
  }
  return array;
}
