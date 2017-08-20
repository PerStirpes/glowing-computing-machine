// https://www.codewars.com/kata/5679aa472b8f57fb8c000047/solutions/javascript/me/best_practice

function findEvenIndex(arr)
{
  var sumLeft = []; // sum of left side
  var sumRight = []; // sum of right side
  var sumAll = 0; // sum for all values in array
  for (var i=0; i<arr.length; i++){
    var sumAll = arr[i] + sumAll; // add up all values
    sumLeft[i] = sumAll - arr[i]; // subtract current
  }
  for (var i=0; i<arr.length; i++){
    // calculate sum to right side
    sumRight[i] = sumAll - sumLeft[i] - arr[i]
    if(sumLeft[i] == sumRight[i]){
      return i;
    }
  }
  return -1;
}

/* Best solution

function findEvenIndex(arr)
{
  for(var i=1; i<arr.length-1; i++) {
    if(arr.slice(0, i).reduce((a, b) =>  a+b) === arr.slice(i+1).reduce((a, b) =>  a+b)) {
      return i;
    }
  }
  return -1;
}

*/