/*
Implement a function called isSubsequence which takes in two strings and checks whether 
the characters in the first string form a subsequence of the characters in the second string. 
In other words, the function should check whether the characters in the first string appear 
somewhere in the second string, without their order changing.

Examples: 

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false - order matters!
*/

// TWO POINTER APPROACH

function isSubsequence(str1, str2) {
  let i = 0, j = 0;
  while (i < str1.length && j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
    }
    j++;
  }
  return i === str1.length && j >= str1.length;
}

// ORIGINAL APPROACH

// function isSubsequence(short, long) {
//   var prev = -1;
//   for (var i = 0; i < short.length; i++) {
//     if(long.indexOf(short[i], prev+1) > prev) {
//       prev = long.indexOf(short[i], prev+1);
//     } else {
//      return false;
//     }
//   }
//   return true;
// }

// Trying to refactor - not done yet, but this works for the 4 examples shown but not for the REPL IT tests ?

// function isSubsequence(short, long) {
//   var i = 0;
//   var j = 0;
//   for (j = 0; j < long.length; j++) {
//    if(long[j] === short[i]) {
//      i++;
//      j++;
//    } else {
//      j++;
//    }
//    i++;
//   }
//   if (i === short.length) {
//    return false;
//   }
//   return true;
// }
