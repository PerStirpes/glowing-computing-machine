// Date: 3/24/17
// Author: Katie Krieger
// Kata: Decode the Morse Code
// URL: https://www.codewars.com/kata/decode-the-morse-code

// Goal:
// The Morse code encodes every character as a sequence of 
// dots and dashes. It's case-insensitive. Traditionally,
// capital letters are used. A single space is used to 
// separate the character codes, and 3 spaces are used to
// separate words. Extra spaces before and after the code
// have no meaning and should be ignored.

// In addition to letters, digits, and some punctuation,
// there are some special service codes like SOS. They are
// treated as single special characters and usually are
// transmitted as separate words.

// The task is to implement a function decodeMorse(morseCode)
// that would take the morse code as input and return a
// decoded human-readable string.

// The Morse code table is preloaded as a dictionary. The
// table can be accessed like this: MORSE_CODE['.--']

// Assume all test strings would contain valid Morse code.

// -------------------------------------------------------

// First we need to create a function and read in the
// Morse code string.

function decodeMorse(morseCode){
  console.log(morseCode);
  //Need to first separate out words, then letters
  //To find individual words, look for three spaces in a row
  //Let's start by making an array of words
  var morseWordArray = morseCode.split("   ");
  var morseLetterArray = []; // set up a blank array for coded letters
  var decodedLetterArray = []; // set up a blank array for decoded letters
  var decodedWordArray = []; // set up a blank array for decoded words
  // Now we want to loop over each word i
  for (var i=0; i < morseWordArray.length; i++){
    // split each word i into a new array of letters
    morseLetterArray = morseWordArray[i].split(" ");
    // go through each letter j in the word i
    for (var j=0; j < morseLetterArray.length; j++){
      // skip blanks at the beginning
      if(morseLetterArray[j] === "" || morseLetterArray[j] == null){
      } else {
        // use push in case there are no letters in this iteration
        decodedLetterArray.push(MORSE_CODE[morseLetterArray[j]]);
      }
    }
    // now we need to join the letters j together in word i
    if(decodedLetterArray.length>0){
      // use push in case there are no words in this iteration
      decodedWordArray.push(decodedLetterArray.join(''));
    }
    decodedLetterArray = [];
  }
  var decodedMessage = decodedWordArray.join(' ');
  return decodedMessage;
}

decodeMorse('...--');

/*
The top rated solution (best practices) on Codewars is:

decodeMorse = function(morseCode){
  function decodeMorseLetter(letter) {
    return MORSE_CODE[letter];
  }
  function decodeMorseWord(word) {
    return word.split(' ').map(decodeMorseLetter).join('');
  }
  return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
}

*/