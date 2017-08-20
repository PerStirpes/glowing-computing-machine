function pascalsTriangle(n) {
  var result = [1];
  if (n == 1) {
    return result;
  }
  var prev = result;
  
  for (var i=1; i<n; i++) {
    result = result.concat(1);
    for (var j=1; j<prev.length; j++) {
      if (prev.length > 1) {
        result = result.concat(prev[j-1]+prev[j])
      }
    }
    result = result.concat(1);

    var new_val = [1];
    for (var j=1; j<prev.length; j++) {
      if (prev.length > 1) {
        new_val = new_val.concat(prev[j-1]+prev[j]);
      }
    }
    new_val = new_val.concat(1);
    prev = new_val;
  }
  return result;
  
}

/* best practices:

function pascalsTriangle(n) {
  var pascal = [];
  var idx = 0;
  
  for ( var i = 0; i < n; i++ ) {
    idx = pascal.length - i;
    for ( var j = 0; j < i+1; j++ ) {
      if ( j === 0 || j === i ) {
        pascal.push(1);
      } else {
        pascal.push( pascal[ idx+j ] + pascal[ idx+j-1 ] );
      }
    }
  }
  
  return pascal;
}

*/