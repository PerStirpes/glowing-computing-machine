/* Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:
Given s = "hello", return "holle".

Example 2:
Given s = "leetcode", return "leotcede".

Note:
The vowels does not include the letter "y".
*/

function reverseVowels(str) {
  let vowels = new Set(['a','e','i','o','u']);
  let i = 0, j = str.length - 1;
  let arr = str.split("");
  while (i < j) {
    if (vowels.has(arr[i].toLowerCase()) && vowels.has(arr[j].toLowerCase())) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    } else if (vowels.has(arr[i].toLowerCase())) {
      j--;
    } else if (vowels.has(arr[j].toLowerCase())) {
      i++;
    } else {
      i++;
      j--;
    }
  }
  return arr.join("");
}

// reverseVowels('hello'); // "holle"
// reverseVowels("leetcode"); // "leotcede"


function reverseVowels(str) {

  var vowels = ['a','e','i','o','u'];  
  var found = [];
  var arr = str.split('');
  
  for(var i=0; i < arr.length; i++){
    if(vowels.includes(arr[i].toLowerCase())){
      found.push(arr[i]);
    }
  }
  
  for(var i=0; i < arr.length; i++){
    if(vowels.includes(arr[i].toLowerCase())){
      arr[i] = found.pop();
    }
  }
   
  return arr.join(""); 
}
