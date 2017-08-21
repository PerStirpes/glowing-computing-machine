/*
Write a function called getAllCombinations which accepts a string and 
returns an array of strings with every possible combination of that string.

The order of your output array does not matter! The tests are checking 
for the length and will sort your array for you to compare.

getAllCombinations('a'); // ['a']
getAllCombinations('hi'); // ["h", "hi", "i"]
getAllCombinations('hey'); // ["h", "he", "hey", "hy", "e", "ey", "y"]
getAllCombinations('hiya'); // ["h", "hi", "hiy", "hiya", "hia", "hy", "hya", "ha", "i", "iy", "iya", "ia", "y", "ya", "a"]
getAllCombinations('hello'); // ["h", "he", "hel", "hell", "hello", "helo", "hel", "helo", "heo", "hl", "hll", "hllo", "hlo", "hl", "hlo", "ho", "e", "el", "ell", "ello", "elo", "el", "elo", "eo", "l", "ll", "llo", "lo", "l", "lo", "o"]

getAllCombinations('a').length; // 1
getAllCombinations('hi').length; // 3
getAllCombinations('hey').length; // 7
getAllCombinations('hiya').length; // 15
getAllCombinations('hello').length; // 31
*/

function getAllCombinations(string){
  var arr = [];
  var newStr;
  
  function helper(start, str) {

    for (var i=0; i<str.length; i++) {
      newStr = str.slice(i+1);
      arr.push(start + str[i])
      helper(start + str[i], newStr);
    }
  }
  
  helper("",string);

  return arr;
}
