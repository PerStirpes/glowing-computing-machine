function reverseVowels(str) {
  var arr = str.split("");
  objVowels = {"a": 1, "A": 1, "e": 1, "E": 1, "i": 1, "I": 1, "o":1, "O": 1, "u": 1, "U": 1};
  vowelsStack = [];
  for (var i=0; i<arr.length; i++) {
    if (arr[i] in objVowels) {
      vowelsStack.push(arr[i]);
    }
  }
  var newArr = [];
  for (var i=0; i<arr.length; i++) {
    if (arr[i] in objVowels) {
      newArr.push(vowelsStack.pop());
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr.join("");
}

/* best practice:

const reverseVowels = str => {
  let vowels = str.replace(/[^aeiou]/gi, '').split('');
  // or vowels = str.match(/[aeiou]/gi) // returns the same as above unless no match
  return str.replace(/[aeiou]/gi, _ => vowels.pop());
  // you can pass a callback function to replace, so you can use a function that depends on the character
  // _ is the same as passing in (), i.e., no arguments
};


Matt's solution (two pointer):


function reverseVowels(str) {
  var newStr = '';
  var vowels = /[aeiou]/i;
  var i = 0;
  var j = str.length - 1;
  while (i < str.length || j > 0) {
    if (vowels.test(str[i])) {
      while (!vowels.test(str[j])) j--;
      if (j >= 0) newStr += str[j--];
    } else {
      newStr += str[i];
    }
  i++;
  }
  return newStr;
}


*/

