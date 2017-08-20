function binarySearch(values, target, start, end) {
  values = values.sort(function(a, b){ return a-b });
  if (start > end) { return -1; } //does not exist

  var middle = Math.floor((start + end) / 2);
  var value = values[middle];

  if (value > target) { return binarySearch(values, target, start, middle-1); }
  if (value < target) { return binarySearch(values, target, middle+1, end); }
  return middle; //found!
}

console.log(binarySearch([1, 4, 6, 7, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 24, 26, 28], 20, 0, [1, 4, 6, 7, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 24, 26, 28].length -1));
