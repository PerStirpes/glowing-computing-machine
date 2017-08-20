/*
Write a function called capitalizations which takes in a string 
and returns an array of all possible ways to capitalize letters in the string.

Examples:

capitalizations("hi"); // ["hi", "Hi", "hI", "HI"]
capitalizations("Yes"); // ["yes", "Yes", "yEs", "yeS", "YEs, "YeS", "yES", "YES"] 

Don't worry about the order of the elements in the return array; 
the tests will sort your output before checking that it has the correct values. 
You can assume that the input string will consist entirely of letter characters.
*/

function capitalizations(string) {
  if (string.length === 0) { return [ '' ]; }
  string = string.toLowerCase();

  var arr = [];

  function helper(start, str) {
    for (var i=0; i<str.length; i++) {
      arr.push(start+str[i].toUpperCase() + str.slice(i+1));
      arr.push(start.toUpperCase()+str[i] + str.slice(i+1).toUpperCase());
      arr.push(start+str.toUpperCase());
      arr.push(start.toUpperCase()+str);
      helper(start+str[i], str.slice(i+1));
      helper(start+str[i].toUpperCase(), str.slice(i+1));
      helper(start.toUpperCase()+str[i], str.slice(i+1));
    }
  }
  helper("", string);
  var arrLength = [];
  for (var i=0; i<arr.length; i++) {
    if (arr[i].length === string.length) {
      arrLength.push(arr[i]);
    }
  }
  var s = new Set(arrLength);
  resultArr = [...s];
  return resultArr;

}
