cycle = function(sequence){
  if(sequence.length === 0) {
    return [];
  }
  var obj = {};
  var result = [];
  var counter = 0;
  console.log(sequence);
  for(var i=0; i<sequence.length; i++) {
    if(sequence[i] in obj) { // repeat number
      result[0] = i;
      counter += 1;
      for(var j=0; j<i; j++) {
        if(sequence[j] === sequence[i]) {
          result[1] = i - j;
        }
      }
      break;
    }
    obj[sequence[i]] = 1;
  }
  if(counter === 0) {
    return [];
  }
  result[0] = result[0] - result[1];
  return result;
}

/* best practices:

cycle = function (sequence) {
  // assumption: repeating values indicate a cycle
  var seen = {}
  for (var i=0; i<sequence.length; i++) {
    if (sequence[i] in seen)
      return [seen[sequence[i]], i-seen[sequence[i]]]
    seen[sequence[i]] = i
  }
  return []
}

*/