function findUniq(arr, start=0) {
  let S = new Set();
  let length, result;
  for (var i=0; i<arr.length; i++) {
    length = S.size;
    for (var j=0; j<arr[i].length; j++) {
      S.add(arr[i][j].toLowerCase());
    }
    if (i > 0 && length !== S.size) {
      result = i;
      if (result === 1 && start===0) {
        return findUniq([arr[0],arr[2],arr[1]], start=1);
      } else if (result === 1 && start===1) {
        result = 0;
        console.log("here",arr[0]);
        return arr[0];
      } 
    }
    if (result >= 0) return arr[result];
  }
}


/* Best solution:

function findUniq(arr) {
  let [a,b,c] = arr.slice(0,3)
  
  if (!similar(a,b) && !similar(a,c)) return a
  for (d of arr) if (!similar(a,d)) return d
}

function similar (x, y) {
  x = new Set(x.toLowerCase())
  y = new Set(y.toLowerCase())

  if (x.size !== y.size) return false
  for (z of x) if (!y.has(z)) return false

  return true
}

*/