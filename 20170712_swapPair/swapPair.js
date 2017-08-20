/*
Write a function called swapPair which accepts two arrays of integers. 
The function should return true if you only need one swap to give the 
two arrays the same sum. 

If this can not be done with one swap, the function should return false. 
You can assume that each array passed to the function will have different 
values than the other. 

swapPair([4,1,2,1,1,2], [3,6,3,3]) // true
swapPair([7,5,6,4], [8,1,3,2]) // true
swapPair([4,5,6,1],[10]) // false
swapPair([20,30,40],[1,2,3,4]) // false

Solve this problem with the following constraints:

Time Complexity - Better than O(n^2)
*/

function swapPair(arr1,arr2) {
  let sum1 = arr1.reduce((acc,next) => acc + next);
  let sum2 = arr2.reduce((acc,next) => acc + next);
  let larger = (sum1 - sum2) > 0 ? arr1 : arr2;
  let smaller = larger === arr1 ? arr2: arr1;
  let largerSum = (sum1 - sum2) > 0 ? sum1 : sum2;
  let smallerSum = larger === arr1 ? sum2: sum1;
  let swap = (largerSum - smallerSum) / 2;
  let obj1 = {}, obj2 = {};
  for (let i=0; i<larger.length; i++) {
    obj1[larger[i]] = larger[i] - swap;
  }
  for (i=0; i<smaller.length; i++) {
    obj2[smaller[i]] = smaller[i];
  }
  for (i=0; i<larger.length; i++) {
    if (obj1[larger[i]] in obj2) {return true;}
  }
  return false;
}
