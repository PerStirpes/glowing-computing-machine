/*
Given a non-empty array of integers, return the k most frequent elements.

You can assume that k is a valid integer and that it will always be less than the length of the array. 
You can also assume that the array will never be empty and will always contain integers.

If the frequency is the same for certain values, show the LOWEST values first.

topKFrequent([1,1,1,2,2,3], 2) // [1,2]
topKFrequent([12,10,3,10,12,12],2) // [12,10]
topKFrequent([1,2,3,4,4,4,7,7,12,12,13,7,7,7], 3) // [7,4,12]
topKFrequent([1,1,2,2,3,3],4) // [1,2,3]
topKFrequent([1,1,2,2,3,3],3) // [1,2,3]
topKFrequent([1,1,2,2,3,3],2) // [1,2]
topKFrequent([1,1,2,2,3,3],1) // [1]
*/

function topKFrequent(arr, k) {
  let freqObj = {};
  let freqSet = new Set();
  let freqArr = [];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    freqObj[arr[i]] = freqObj[arr[i]] + 1 || 0;
  }
  for (let key in freqObj) {
    freqSet.add(freqObj[key]);
  }
  for (let val of freqSet) {
    freqArr.push(val);
  }
  freqArr.sort().reverse();
  for (let j = 0; j < k; j++) {
    for (let item in freqObj) {
      if (freqObj[item] === freqArr[j]) {
        result.push(+item);
      }
    }
  }
  return result.slice(0,k);
}
