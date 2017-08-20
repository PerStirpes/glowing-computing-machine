/*
Write a function called findPairs, that takes an array and value as input.  
Your goal is to find the number of the pairs in the array that sum to x.  
You can assume the values in the array are integers and that all the values are unique.

Constraints: 

Time Complexity - O(n)

findPairs([1,2,3,4,5,6,7],8) // 3
findPairs([1,2,3,4,5,6],6) // 2
findPairs([],4) // 0
*/


function findPairs(arr, val) {
  let obj = {};
  for (let i=0; i < arr.length; i++) {
    if (!(arr[i] in obj) && arr[i] !== val/2) {
      obj[val - arr[i]] = arr[i];
    }
  }
  let count = 0;
  for (let i=0; i < arr.length; i++) {
    if (arr[i] in obj) {count++;}
  }
  return count;
}
