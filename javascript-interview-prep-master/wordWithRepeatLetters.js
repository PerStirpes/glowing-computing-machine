function LetterCountI(str) {
  var splitStr = str.split(" ");

  var wordWithMostReps;
  var wordRepCount = 0;

  for (var i = 0; i < splitStr.length; i++) {
      var currentWord = splitStr[i];
      var currentWordHighReps = 0;
      for (var j = 0; j < currentWord.length; j++) {
        var currentLetter = currentWord[j];
        var re = new RegExp(currentLetter, 'g'); // 'g' stands for global match
        // .match() takes RegEx as its argument
        //& returns an array with every match it finds
        var currentLetterReps = currentWord.match(re).length;
        if (currentLetterReps > currentWordHighReps) {
          currentWordHighReps = currentLetterReps;
        }
      }
      if (currentWordHighReps > wordRepCount) {
        wordWithMostReps = currentWord;
        wordRepCount = currentWordHighReps;
      }
    }
   return wordRepCount > 1 ? wordWithMostReps : -1;

}
