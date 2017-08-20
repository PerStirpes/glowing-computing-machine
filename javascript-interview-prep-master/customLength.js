function customLength(str) {
  var count = 0;
  var i;
  for (i in str) {
    if (str[i]) {
      count++;
    }
  }
  return count;
}
