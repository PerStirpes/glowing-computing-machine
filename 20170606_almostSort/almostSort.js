/*
Write a function called almostSort which accepts an array of 
numbers that are sorted except for a single pair. You must sort 
the array with one swap with a time complexity of O(n) and space 
complexity of O(1)

almostSort([1,2,3,7,5,6,4]); // [1,2,3,4,5,6,7]
almostSort([1,2,6,4,5,3]); // [1,2,3,4,5,6]
almostSort([-1,1,0,2]); // [-1,0,1,2]
*/

function almostSort(arr){
  var i = 0;
  var j = 1;
  var first = null;
  var second;

  while(i < arr.length && j < arr.length) {
    if(arr[i] > arr[j] && first === null) {
      first = i;
      if (arr[i] > arr[j] && arr[j] < arr[j+1]) {
        second = j;
      }
    } else if (arr[i] > arr[j]) {
      second = j;
    }
    i++;
    j++;
  }
  var temp = arr[first]; // will be second
  arr[first] = arr[second];
  arr[second] = temp;
  return arr;
}
