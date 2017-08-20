function Palindrome(str) {

  if (str.split("").join("") === customReverse(str).split("").join("")) {
   return true;
  }

  return false;

}

function customReverse(str) {
    var output = '';
    for (var i = str.length -1; i >= 0; i--) {
      output += str[i];
    }
    return output;
}
