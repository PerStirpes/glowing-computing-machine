function digital_root(n) {
  // create array of single digits
  nArr = n.toString().split("").map(Number);
  var num = 11; // starting value
  while (num > 9){ // while more than one digit
    num = nArr.reduce(function(a, b) {
      return a + b; // add all elements in the array
    }) 
    // convert back to array of single digits
    nArr = num.toString().split("").map(Number);
  }
  return num;
}