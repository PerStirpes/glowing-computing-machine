// If the list is of length 0 or 1, then it is already sorted. Otherwise:
// Divide the unsorted list into two sublists of about half the size.
// Sort each sublist recursively by re-applying merge sort.
// Merge the two sublists back into one sorted list.
var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  } // if arr.length is one or 0,
    //it's already sorted

  var middle = parseInt(arr.length / 2); // creating a midpoint to break the array
  var left = arr.slice(0, middle);//breaking out the array into the first half
  var right = arr.slice(middle, arr.length);// breaking out the array into the second half

  return merge(mergeSort(left), mergeSort(right));

}

function merge(left, right) {
  var result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) {
    console.log("left.length: " + left.length);
    result.push(left.shift());
    console.log("left.shift(): " + left.shift());
  }

  while (right.length) {
    console.log("right.length: " + right.length)
    result.push(right.shift());
    console.log("right.shift(): " + right.shift());

  }

  return result;
}

console.log(mergeSort(a));
