
/* 
There are n people standing in a circle. They are numbered from 1 through n 
in clockwise direction. The counting out begins at person #1 and continues 
around the circle in a clockwise direction. In each step, k-1 people are 
skipped and the next person -- that is, the kth person -- is removed from 
the circle. 
*/

function josephus(n, k) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i + 1);
  }
  let i = 0;
  let count = 1;
  while (arr.length > 1) {
    if (count === k) {
      arr.splice(i, 1);
      count = 0;
    } else {
      i = i >= arr.length - 1 ? i + 1 - arr.length : i + 1;
    }
    count++;
  }
  return arr[0]
}

// josephus(5, 2); // 3
// josephus(10, 3); // 4
// josephus(12, 5); // 1
// josephus(8, 4); // 6


/* attempt with recursion:

function josephus(n, k){
  if (n === 1) { return n; }
  let arr = [];
  for (let i=1; i <= n; i++) {
    arr.push(i);
  }
  return helper(arr, k);

  function helper(array, kay) {
    let count = 0;
    for (let i=0; i<array.length; i++) {
      count++;
      if (kay > array.length) {
        return array[kay - array.length];
      }
      if (count === kay) {
        array.splice(i,1);
        array = array.slice(kay-1).concat(array.slice(0,kay-1));
      } else {
        return array[0];
      }
    }
    if (array.length > 1) {
      return helper(array, kay);
    } else {
      if (array.length === 1) {
        return array[0];
      } else {
        return "KATIE";
      }
    }   
  }
}

*/
