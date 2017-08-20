/*
Given two sorted arrays, write a function called mergeSortedArrays 
which accepts two arrays and returns a new array with both of the 
values from each array sorted. 

This function should run in O(n + m) time and O(n + m) space and 
should not modify the parameters passed to it.

var arr1 = [1,3,4,5];
var arr2 = [2,4,6,8];
mergeSortedArrays(arr1,arr2) // [1,2,3,4,4,5,6,8]

arr1 // [1,3,4,5];
arr2 // [2,4,6,8];

var arr3 = [-2,-1,0,4,5,6];
var arr4 = [-3,-2,-1,2,3,5,7,8];

mergeSortedArrays(arr3,arr4); // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]

arr3 // [-2,-1,0,4,5,6];
arr4 // [-3,-2,-1,2,3,5,7,8];

var arr5 = [3,4,5]
var arr6 = [1,2]

mergeSortedArrays(arr5,arr6) // [1,2,3,4,5]
*/

function mergeSortedArrays(arr1, arr2){
  var i = 0;
  var j = 0;
  var newArr = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      newArr.push(arr2[j]);
      j++;
    } else if (arr1[i] === arr2[j]) {
      newArr.push(arr1[i]);
      newArr.push(arr2[j]);
      i++;
      j++;
    } 
  }
  if (i < arr1.length) {
      newArr = newArr.concat(arr1.slice(i));
  } else if (j < arr2.length) {
       
      newArr = newArr.concat(arr2.slice(j));
  }
  return newArr;
}
