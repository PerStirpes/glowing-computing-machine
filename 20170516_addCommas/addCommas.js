/*
Add commas.

This function takes in a number and formats that number so that it has 
commas after every third digit to the left of the decimal point. 
You can assume that all numbers are non-negative.
Examples:

addCommas(1) // "1"
addCommas(1000) // "1,000"
addCommas(123456789) // "123,456,789"
addCommas(3.141592) // "3.141592"
addCommas(54321.99) // "54,321.99"
*/

function addCommas(num) {
  numStr = num.toString();
  numRoundArr = Math.floor(num).toString().split("");
  newArr = numRoundArr.slice();
  for (var i = newArr.length - 3; i > 0; i-=3) {
    newArr.splice(i,0,",");
  }
  if (numStr.split(".").length > 1) {
      return newArr.join("") + "." + numStr.split(".")[1];
  }
  return newArr.join("");
}
