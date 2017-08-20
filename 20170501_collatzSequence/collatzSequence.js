/*
Implement the following functions:

Collatz sequence.

Given a positive whole number n, this function should produce an array given 
by the following rules:

1. The first element in the array should be n.
2. After the first element, each subsequent element should equal half the 
previous element, if the previous element is even, or three times the previous 
element plus one, if the previous element is odd. Note that in either case, 
the result should be an integer.
3. The last element in the array should be 1. When you encounter your first 1, 
you should push it to the array and return the array.
Examples:

collatzSequence(4); // [4, 2, 1]
collatzSequence(6); // [6, 3, 10, 5, 16, 8, 4, 2, 1]
collatzSequence(7); // [7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1]
collatzSequence(0); // "Input must be a positive whole number."
collatzSequence([]); // "Input must be a positive whole number."
(For more, see https://en.wikipedia.org/wiki/Collatz_conjecture)

You should implement this function in two ways: iteratively and recursively.
*/


function collatzSequenceIterative(n) {
  if(n <= 0 || typeof n !== "number" || n !== Math.floor(n)) return "Input must be a positive whole number."
  var arr = [n];
  while(n > 0) {
    if(n === 1) {
      n = n-1;
    } else if(n % 2 === 0) {
      arr.push(n/2);
      n = n/2;
    } else {
      arr.push(n*3 + 1);
      n = n*3 + 1;
    }
  }
  return arr;
}

function collatzSequenceRecursive(n) {
  if(n <= 0 || typeof n !== "number" || n !== Math.floor(n)) return "Input must be a positive whole number." 
  var arr = [n];  
  function collatzHelper(N){
    if(N === 1) {
      // do nothing
    } else if(N % 2 === 0) {
      arr.push(N/2);
      collatzHelper(N/2);
    } else {
      arr.push(N*3 + 1);
      collatzHelper(N*3 + 1);
    }
  }
  collatzHelper(n);
  return arr;
}
