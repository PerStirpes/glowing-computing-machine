/*
Write a function called sameFrequency. Given two positive integers, 
find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
*/

function sameFrequency(n1, n2){
  if (n1.length !== n2.length) {
    return false;
  }
  str1 = n1.toString();
  str2 = n2.toString();
  // make object of frequencies of digits in n1
  obj1 = {};
  for (var i = 0; i < str1.length; i++) {
    if(str1[i] in obj1) {
      obj1[str1[i]] += 1;
    } else {
      obj1[str1[i]] = 1;
    }
  }
  // make object of frequencies of digits in n2
  obj2 = {};
  for (i = 0; i < str2.length; i++) {
    if(str2[i] in obj2) {
      obj2[str2[i]] += 1;
    } else {
      obj2[str2[i]] = 1;
    }
  }
  // loop through obj1 and see if values matches values in obj2
  for (var item in obj1) {
    if(obj1[item] !== obj2[item] || !(item in obj2)) {
      return false;
    }
  }
  return true;
}
