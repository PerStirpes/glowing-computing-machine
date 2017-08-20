function duplicate(arr) {
  var newArr = arr.slice(0);
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}
