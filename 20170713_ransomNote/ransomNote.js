/*
ransomNote("rrrrr", "rrr") // returns false
Given an arbitrary ransom note string and another string containing 
letters from all the magazines, write a function that will return 
true if the ransom note can be constructed from the magazines ; 
otherwise, it will return false.

ransomNote("a", "b") // false
ransomNote("abc", "abc") // true
ransomNote("abc", "cba") // true
ransomNote("rrr", "rr") // false

ransomNote("a b c", "abc") // true
ransomNote("a          b", "b  a") // true
ransomNote("abcdefghi jklmnopqrstuv", "abcdefghijklmnopqrstuv") // true
*/


function ransomNote(note, mag) {
  let setNote = new Set(note);
  let setMag = new Set(mag);
  for (let val of setNote) {
    if (val !== " " && !setMag.has(val)) {
      return false;
    }
  }
  if (note.split(" ").join("").length === mag.split(" ").join("").length) {
    return true;
  }
  return false;
}
