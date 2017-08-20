function allAnagrams(word) {
  if (word.length < 2) {
    return word;
  } else {
    var allAnswers = [];
    for (var i = 0; i < word.length; i++){
      var letter = word[i];
      var shorterWord = word.substr(0, i) + word.substr(i+1, word.length-1);
      var shortWordArray = allAnagrams(shorterWord);
      for(var j = 0; j < shortWordArray.length; j++){
        allAnswers.push(letter + shortWordArray[j]);
      }
    }
    return allAnswers;
  }
}

allAnagrams('potato');
