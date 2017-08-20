function scramble(str1, str2) {
  var obj1 = [];
  var obj2 = [];
  for (var i=0; i<str1.length; i++) {
    if(str1[i] in obj1) {
      obj1[str1[i]] += 1;
    } else {
      obj1[str1[i]] = 1;
    }
  }
  for (var j=0; j<str2.length; j++) {
    if(str2[j] in obj2) {
      obj2[str2[j]] += 1;
    } else {
      obj2[str2[j]] = 1;
    }
  }
  for (var key in obj2) {
    if (obj2[key] > obj1[key] || !(key in obj1)) {
      return false;
    }
  }
  return true;
}


/* best practice:

function scramble(str1, str2) {
  var map={};
  for(var i in str1) {
    map[str1[i]] ? map[str1[i]]++ : map[str1[i]]=1;
  }
  for(var i in str2) {
    if(!map[str2[i]]) return false;
    map[str2[i]]--;
  }
  return true;
}

*/