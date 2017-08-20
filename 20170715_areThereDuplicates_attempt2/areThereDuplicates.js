/*
Implement a function called areThereDuplicates, which checks whether there 
are any duplicates among the arguments passed in. The function should either 
run in O(n) time and O(n) space or O(n log n) time and O(1) space.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true
*/

// O(n) time and O(n) space

function areThereDuplicates(...args) {
  return !args.length === new Set(args).size;
}

// O(n log n) time and O(1) space

function areThereDuplicates(...args) {
  args.sort();
  let i = 0, j = 1;
  while (i < args.length && j < args.length) {
    if (args[i] === args[j]) {
      return true;
    } else {
      i++;
      j++;
    }
  }
  return false;
}
