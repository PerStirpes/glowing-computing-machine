function titleCase(title, minorWords) {
  var arr_title = title.toLowerCase().split(" ");
  if(typeof minorWords !== undefined){
    var arr_minors = minorWords.toLowerCase().split(" ");
  } else {
    var arr_minors = [];
  }
  for(var i=0; i<arr_title.length; i++) {
    var letters = arr_title[i].split('');
    if(arr_minors.indexOf(arr_title[i]) < 0 || letters.length > 0 && i == 0) {
        letters[0] = letters[0].toUpperCase();
    }
    arr_title[i] = letters.join('');
  }
  return arr_title.join(" ");
}

/* best practices

function titleCase(title, minorWords) {
  var minorWords = typeof minorWords !== "undefined" ? minorWords.toLowerCase().split(' ') : [];
  return title.toLowerCase().split(' ').map(function(v, i) {
    if(v != "" && ( (minorWords.indexOf(v) === -1) || i == 0)) {
      v = v.split('');
      v[0] = v[0].toUpperCase();
      v = v.join('');
    }
    return v;
  }).join(' ');
}

*/