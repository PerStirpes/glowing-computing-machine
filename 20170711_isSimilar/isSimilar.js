/*
Write a function called isSimilar which accepts two arrays. 
This function should return true if one array can be created from 
another by swapping at most one pair of elements. This function should 
return false if these arrays can not be the same in one swap.

Constraints: 

Time Complexity - O(n)

isSimilar([3,2,1],[1,2,3]) // true
isSimilar([1,2,3,4],[4,2,3,1]) // true
isSimilar([0,1,2,3,4],[3,1,2,0,4]) // true
isSimilar([1,2,3,4,5],[1,2,3,4,5]) // true
isSimilar([4,1,2,3], [1,2,3,4]) // false
*/

function isSimilar(arr1, arr2){
  if(arr1.length !== arr2.length) {return false;}
  let countDiff = 0;
  let diffArr = [];
  for (let i=0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      countDiff++;
      diffArr.push(arr1[i],arr2[i]);
    }
    if (countDiff === 2) {
      if(diffArr[0] === diffArr[3] && diffArr[1] === diffArr[2]) {
        return true;
      } else {
        return false;
      }
    }
    if (countDiff > 2) {return false;}
  }
  if (countDiff === 0) {
    return true;
  }
  return false;
}
