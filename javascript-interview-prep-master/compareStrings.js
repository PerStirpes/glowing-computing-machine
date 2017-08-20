function matchingLetters (string1, string2) {
  var letters = [];
  for(var i = 0; i < string1.length; i++) {
    for(var j = 0; j < string2.length; j++) {
      if (string1[i].toLowerCase() === string2[j].toLowerCase() && letters.indexOf(string1[i]) == -1) {
        letters.push(string1[i].toLowerCase());
      }
    }
  }
  if (letters.length > 0) {
      return letters;
  } else {
      return -1;
  }
}

//Write a function that compares both strings
//and finds matching letters.
//Must do it in O(n) time.

console.log(matchingLetters("Alexa", "Coreya"));

// can console.log() the result, but have returns in the actual function

