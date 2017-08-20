function likes(names) {
  if(names.length == 0){
    return "no one likes this";
  }
  // remove undefineds
  var clean = [];
  for(var i=0; i < names.length; i++) {
    if(names[i]){ // is not undefined
      clean.push(names[i]);
    }
  }
  if(clean.length == 1){
    return clean[0].concat(" likes this");
  }
  if(clean.length == 2){
    return clean[0].concat(" and ",clean[1]," like this");
  }
  if(clean.length == 3){
    return clean[0].concat(", ",clean[1]," and ",clean[2]," like this");
  }
  return clean[0].concat(", ",clean[1]," and ",clean.length-2," others like this");
}


/* best practices:

function likes(names) {
  names = names || [];
  switch(names.length){
    case 0: return 'no one likes this'; break;
    case 1: return names[0] + ' likes this'; break;
    case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
}

*/