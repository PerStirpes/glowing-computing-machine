/*
Given an array of distinct elements, write a function called 
findTriplets, which returns the number of triplets in array 
whose sum is zero.

findTriplets([0, -1, 2, -3, 1]); // 2 (0,-1,1 and -3,2,1)
findTriplets([1, -2, 0, 5]); // 0
findTriplets([0,4,2,7,5,3,-3,-2,-8,-12]); // 5

Bonus - Solve this problem in O(n^2) time.
*/

function findTriplets(arr){
  var left, right, goal, sum;
  var count = 0;
  arr.sort();
  // iterate through each element in arr
  for (var i=0; i<arr.length - 3; i++) {
    left = i + 1;
    right = arr.length - 1;
    while (left < right) {
      goal = -arr[i];
      if (arr[left] + arr[right] < goal) {
        left++;
      } else if (arr[left] + arr[right] > goal) {
        right--;
      } else {
        count++;
        left++;
        right--;
      }
    }
  }
  return count; 
}
