/*
Given an array of integers, and a number, find the number of pairs of 
integers in the array whose sum is equal to the second parameter. 
You can assume that there will be no duplicate values in the array.

countPairs([3,1,5,4,2], 6) // 2 (1,5 and 2,4)
countPairs([10,4,8,2,6,0], 10) // 3 (2,8, 4,6, 10,0)
countPairs([4,6,2,7], 10) // 1 (4,6)
countPairs([1,2,3,4,5], 10) // 0
countPairs([1,2,3,4,5], -3) // 0


Bonus 1 

Solve this algorithm with the following constraints:

Time Complexity - O(n)
Space Complexity - O(n)

Bonus 2 

Solve this algorithm with the following constraints:

Time Complexity - O(n * log(n))
Space Complexity - O(1)
*/


/*
// initial method:

function countPairs(array, num) {
  var counter = 0;
  var match;
  for (var i=0; i<array.length; i++) {
    match = (num - array[i]);
    if(array.indexOf(match) > i) {
      counter++;
    }
  }
  return counter;
}
*/


// bonus:

function countPairs(array, num, counter) {  
  var counter = counter || 0;
  if(array.length < 2)  return counter;
  
  array.sort();
  
  var match = num - array[0];
  array.shift();
  var index = array.indexOf(match);
  if(index > -1) {
      counter ++;
      array.splice(index,1);
  }
  return countPairs(array,num, counter);
}
