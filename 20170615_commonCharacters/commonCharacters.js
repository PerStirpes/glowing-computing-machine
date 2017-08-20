/* Given an Array of Strings, find the number of characters that are common to all strings.


Notes:
Assume the characters will only be lowercase letters a-z.

Constraints:
Time: O(N) where N is the total number of characters in the Array.

Example:
Input: ['tbaabdc', 'abbacd', 'fpacba']

Output: 4
*/

function commonCharacters(words) {
  let arrOfObjs = [];
  let obj;
  for (let i=0; i<words.length; i++) {
    obj = words[i].split("").reduce(function(acc,next) {
      acc[next] ? acc[next]++ : acc[next] = 1;
      return acc;
    },{})
    arrOfObjs.push(obj);
  }

  let finalObj = {};
  let first = arrOfObjs[0];
  let second;

  for (let i=1; i<arrOfObjs.length; i++) {
    second = arrOfObjs[i];
    for (let key in first) {
      if (key in second) {
        finalObj[key] = Math.min(first[key], second[key]); 
      } else {
        delete(finalObj[key]);
      }
    }
    first = finalObj;
  }

  let count = 0;
  for (key in finalObj) {
    count += finalObj[key];
  }
  return count;
}
