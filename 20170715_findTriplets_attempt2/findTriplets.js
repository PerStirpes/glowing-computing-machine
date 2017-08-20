/*  Given an array of distinct elements, write a function called findTriplets, 
which returns the number of triplets in array whose sum is zero.

findTriplets([0, -1, 2, -3, 1]); // 2 (0,-1,1 and -3,2,1)
findTriplets([1, -2, 0, 5]); // 0
findTriplets([0,4,2,7,5,3,-3,-2,-8,-12]); // 5

Bonus - Solve this problem in O(n^2) time.  */


// TWO POINTER SOLUTION

function findTriplets(arr) {
  arr.sort((a,b) => a > b);
  let count = 0, i = 0, j = arr.length - 1;
  for (let i=0; i < arr.length - 3; i++) {
    let start = i + 1;
    let end = arr.length - 1;
    while (start < end) {
      let sum = arr[i] + arr[start] + arr[end];
      if (sum > 0) {
        end--;
      } else if (sum < 0) {
        start++;
      } else {
        count++;
        start++;
        end--;
      }
    }
  }
  return count;
}
