function dirReduc(arr){
  var obj = {
    "NORTH": "SOUTH",
    "SOUTH": "NORTH",
    "EAST": "WEST",
    "WEST": "EAST"
  };
  var counter = 0;
  while(counter < arr.length) {
    for (var i = 0; i<arr.length; i++) {
      if(obj[arr[i]] === arr[i+1]){
        arr.splice(i,2);
      }
    }
    counter += 1;
  }
  return arr;
}

/* best practice:

function dirReduc(plan) {
  var opposite = {
    'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
  return plan.reduce(function(dirs, dir){
      if (dirs[dirs.length - 1] === opposite[dir])
        dirs.pop();
      else
        dirs.push(dir);
      return dirs;
    }, []);
}

*/