function merryChristmas(s){
  // make an array
  sArray = s.split('');
  // set zero counters
  var have = {
    M: 0,
    e: 0,
    r: 0,
    y: 0,
    C: 0,
    h: 0,
    i: 0,
    s: 0,
    t: 0,
    m: 0,
    a: 0}
  // define needs for a pair
  var need = {
    M: 1,
    e: 1,
    r: 3,
    y: 1,
    C: 1,
    h: 1,
    i: 1,
    s: 2,
    t: 1,
    m: 1,
    a: 1}
  // loop over array, counting numbers of each letter
  for(var i=0; i<sArray.length; i++){
    if(sArray[i] in have){
      have[sArray[i]] += 1;
    }
  }
  // check against numbers in need
  var num = {}; // start a counter array
  var min = sArray.length; // start a minimum counter
  for(var keys in need){
    if(keys in have){
      // count the number of pairs
      num[keys] = Math.floor(have[keys] / need[keys]);
    } else { // if not all letters exist, no pairs
      return 0;
    }
    // look for minimum number in num object
    if(num[keys] < min){
      min = num[keys]; // override old min
    }
  }
  return min;
}