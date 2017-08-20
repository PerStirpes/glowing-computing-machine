function toWeirdCase(string){
  // separate string into array of words
  var words = string.split(" ");
  // loop through letters in each word
  for(var i=0; i<words.length; i++){
    // separate word[i] into array of letters
    var letters = words[i].split("");
    // loop over letters
    for(var j=0; j<letters.length; j++){
      if(j % 2 == 0){ // even index
        letters[j] = letters[j].toUpperCase();
      } else {
      letters[j] = letters[j].toLowerCase();
      }
    }
    words[i] = letters.join("");
  }
  return words.join(" ");
}