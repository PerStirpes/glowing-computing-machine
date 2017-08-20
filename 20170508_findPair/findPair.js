/*
Given an unsorted array and a number n, find if there exists 
a pair of elements in the array whose difference is n. This 
function should return true if the pair exists or false if it does not.

findPair([6,1,4,10,2,4], 2) // true
findPair([8,6,2,4,1,0,2,5,13],1) // true
findPair([4,-2,3,10],-6) // true
findPair([6,1,4,10,2,4], 22) // false
findPair([], 0) // false
findPair([5,5], 0) // true
*/

function findPair(arr, n){
  arrSorted = arr.sort(function(a,b){
    return a-b
  })
  for (var i=0; i<arrSorted.length; i++){
    for (var j=arrSorted.length - 1; j>=0; j--) {
      if(arrSorted[i] - arrSorted[j] === n) {
        return true;
      }
    }
  }
  return false;
}
