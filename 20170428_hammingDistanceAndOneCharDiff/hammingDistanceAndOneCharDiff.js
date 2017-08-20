/*
1. Hamming Distance (https://en.wikipedia.org/wiki/Hamming_distance).

This function takes in two strings of equal length, and calculates 
the distance between them. Here, "distance" is defined as the number 
of characters that differ at the same position. The function should ignore case.

If the inputs do not have the same length, the function should return 
"Input strings must have the same length."

Examples:

hammingDistance("hello", "jello") // 1
hammingDistance("cool", "kewl") // 3
hammingDistance("sweet", "Sweet") // 0
hammingDistance("yoyo", "yoyoyo") // "Input strings must have the same length."

2. Implement a function called

oneCharDifference

which checks whether there two strings differ by a single character.

The difference may consist of one character being added, removed, or replaced, 
in which case the function must return true. In all other cases it must return 
false. As with hammingDistance, this function should ignore case.

Examples:

oneCharDifference("grate", "grape") // true 
oneCharDifference("male", "maple") // true 
oneCharDifference("help", "helping") // false
oneCharDifference("boom", "boo") // true
oneCharDifference("same", "same") // false
*/

function hammingDistance(str1,str2) {
  if(str1.length !== str2.length) return "Input strings must have the same length."  
  var counter = 0; 
  for (var i = 0; i<str1.length; i++) {
    if (str1[i].toLowerCase() !== str2[i].toLowerCase()) counter ++;
  } 
  return counter;
}
  


function oneCharDifference(str1,str2) {
  
  // check if strings are equal lenths or if their lengths differ by more than 1
  if (str1 === str2 || (str1.length - str2.length) > 1 || (str2.length - str1.length) > 1) return false;
  
  // check for one character replaced (hammingDistance = 1)
  if(str1.length === str2.length) {
    if(hammingDistance(str1,str2) === 1) return true;
    else return false;
  }
  
  // check which string is longer, then convert to arrays
  
  var longer = (str1.length > str2.length) ? str1 : str2;
  var shorter = (str1.length < str2.length) ? str1 : str2;

  var longerArr = longer.split("");
  var shorterArr = shorter.split("");
  
  // see if shorter + random character inserted at any index === longer
  for (var i=-1; i<=longer.length; i++) {
    var shorterWithExtra = [];
    var left = shorterArr.slice(0,i+1);
    var right = shorterArr.slice(i+1);
    shorterWithExtra = shorterWithExtra.concat(left,"-",right);
    
    if(hammingDistance(longer,shorterWithExtra) === 1) return true;
  }
  
  return false;
}


