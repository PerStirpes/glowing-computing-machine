function outputDupes(arr) {
  var dupes = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && j != i && dupes.indexOf(arr[i]) == -1) {
            dupes.push(arr[i]);
      }
    }
  }
  return dupes;
}
