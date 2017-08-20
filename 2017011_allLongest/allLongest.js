/*
Write a function called allLongest which accepts an array of strings 
and returns another array containing all of its longest strings. 

Constraints: 

Time Complexity - O(n)

allLongest(["a","bb","cc","dd"]) // ["bb","cc","dd"]
allLongest(['Elie', 'Matt', 'Tim'] // ["Elie", "Matt"]
allLongest(["awesome", "somethingelse", "thisissomuchfun"]) // ["thisissomuchfun"]
*/

function allLongest(array){
  let maxLength = 0;
  let newArr = [];
  for (let i=0; i < array.length; i++) {
    if (array[i].length > maxLength) { maxLength = array[i].length; }
  }
  for (i=0; i < array.length; i++) {
    if (array[i].length === maxLength) { newArr.push(array[i]); }
  }
  return newArr;
}
