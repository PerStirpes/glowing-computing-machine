function createDict(keys, values){
  var obj = {};
  for (var i = 0; i < keys.length; i++) {
    if (values[i] === undefined) {
      obj[keys[i]] = null;
    }
    else {
      obj[keys[i]] = values[i];
    }
  }
  return obj;
}


/* best practices:

function createDict(keys, values) {
  var obj = {}
  
  for (var i = 0; i < keys.length; i++) {
    obj[keys[i]] = i < values.length ? values[i] : null
  }
  
  return obj
}

*/