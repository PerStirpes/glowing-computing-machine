function persistence(num) {
  // if num is a single digit, return 0
  if(num.toString.length === 1){
    //return 0;
  }
  // put num into an array of single digit integers
  var arr = num.toString().split("");
  for(var i=0; i<arr.length; i++){
      arr[i] = +arr[i];
  }
  var counter = 0; // number of cycles - what we need to return
  // loop through until arr length is not > 1
  while (arr.length > 1){
    result = arr.reduce(function(a, b) {
      return a * b; // multiply all elements in the array
    }) // returns a number
    arr = result.toString().split(""); // put back into array of strings
    for(var j=0; j<arr.length; j++){ 
      arr[j] = +arr[j]; // convert array to single digit integers
    }
    counter += 1; // add 1 to counter
  }
  return counter;
}

/* reduce sums all elements in an array
if reduce of the array = the last element in the array
 
[1, 2, 3, 4].reduce(function(a, b) {
return a * b;
}); // it returns 24

that is, accumulator * current value
if no value is provided for the starting accumulator value,
the first element in the array is used. 
If initialValue isn't provided, reduce will execute the 
callback function starting at index 1, skipping the first index. 
If initialValue is provided, it will start at index 0.

Here, no initialValue is provided, so it starts at index 1
and accumulator is the value of the first element (1).

position 1: accumulator = 1, current value = 2 --> 2
position 2: accumulator = 2, current value = 3 --> 6
position 3: accumulator = 6, current value = 4 --> 24

*/
