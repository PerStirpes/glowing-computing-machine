function find(rats) {
    var ratsBin = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for(var i=0; i<rats.length; i++) {
      // loop through rats, for each element, change position in ratsBin to 1
      ratsBin[ratsBin.length-rats[i]-1] = 1; 
    }
    // return ratsBin elements joined as an integer
    return parseInt(+ratsBin.join(""), 2);
}