/*
Implement a function called: 

topKFrequent

Given a non-empty array of integers, return the k most frequent elements.

You can assume that k is a valid integer and that it will always be 
less than the length of the array. You can also assume that the array 
will never be empty and will always contain integers.

Examples:

topKFrequent([1,1,1,2,2,3], 2) // [1,2]
topKFrequent([12,10,3,10,12,12],2) // [12,10]
topKFrequent([1,2,3,4,4,4,7,7,12,12,13,7,7,7], 3) // [7,4,12]

If the frequency is the same for certain values, show the LOWEST values first.

topKFrequent([1,1,2,2,3,3],4) // [1,2,3]
topKFrequent([1,1,2,2,3,3],3) // [1,2,3]
topKFrequent([1,1,2,2,3,3],2) // [1,2]
topKFrequent([1,1,2,2,3,3],1) // [1]
*/

function topKFrequent(arr, k) {
  let obj = {};
  arr.map((val) => {
    obj[val] = (obj[val] || 0) + 1;
  });
  let objRev = {};
  let arrFreq = [];
  for(let key in obj) {
    if(obj[key] in objRev) {
      objRev[obj[key]].push(+key);
    } else {
      objRev[obj[key]] = [+key];
    }
    arrFreq.push(obj[key]);
  }
  arrFreq.sort().reverse();
  let result = [];
  let size = 0;
  for (let key in objRev) {
    size++;
  }
  for (var i=0; i<Math.min(k,size); i++) {
    result.push(...objRev[arrFreq[i]]);
  }
  return result.slice(0,k);
}
