/*
Implement a function called

areThereDuplicates

which checks whether there are any duplicates among the arguments passed in. 
The function should either run in O(n) time and O(n) space or O(n log n) 
time and O(1) space.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
*/

function areThereDuplicates(...args) {
  if (arguments.length === 0) return false;
  if (args.length === new Set(args).size) return false;
  return true;
}
