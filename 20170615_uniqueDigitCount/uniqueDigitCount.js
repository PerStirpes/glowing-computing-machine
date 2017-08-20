/*
Write a function called uniqueDigitCount which takes in an exponent 
and returns a count of all numbers from 0 up to 10^(exponent) that 
have unique digits. This range should include 0 but exclude the largest value.

Examples:

uniqueDigitCount(1);
// 10, every number from 0 to 9 has unique digits

uniqueDigitCount(2);
// 91, every number from 0 to 99 has unique digits
// except for 11, 22, 33, 44, 55, 66, 77, 88, 99

If you pass in a number less than 1, return 0.

Watch out for your time complexity! As a bonus, try to solve this 
problem in constant time (the last test checks for this; you can view it as a bonus).
*/

function uniqueDigitCount(num) {

  function choices(num) {  
    if (num < 1) { return 0; }
    if (num === 1) {return 10; }
    var choices = 9;
    for (var i=1; i<num; i++) {
      choices *= (9-i+1);
    }
    return choices;
  }

  var totalChoices = 0;
  for (var i=1; i<=num; i++) {
    totalChoices += choices(i);
  }
  return totalChoices;
}
