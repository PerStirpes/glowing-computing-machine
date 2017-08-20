//Returns the result of having each alphabetic letter of the given text string shifted forward
// by the given amount, with wraparound. Case is preserved, and non-letters are unchanged.
function caesarShift(text, shift) {
  var result = "";
    for (var i = 0; i < text.length; i++) {
    var c = text.charCodeAt(i);
    if      (c >= 65 && c <=  90) result += String.fromCharCode((c - 65 + shift) % 26 + 65);  // Uppercase
    else if (c >= 97 && c <= 122) result += String.fromCharCode((c - 97 + shift) % 26 + 97);  // Lowercase
    else                          result += text.charAt(i);  // Copy
  }
  return result;
}

//implementation 2
function caesarShift2(str, shift) {
    var originalText = str;
    var originalLetters = originalText.split("");
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    var cipheredText="", _x = "";
    for (x in originalLetters) {
        if (originalLetters[x] === " ") {
          _x = " ";
        } else if (shift > 0) {
            _x = alphabet[(alphabet.indexOf(originalLetters[x]) + shift) % alphabet.length]
        } else {
            _x = alphabet[(alphabet.indexOf(originalLetters[x]) + (26 - shift)) % alphabet.length]
        }
        cipheredText = cipheredText + _x;
    }
    return cipheredText;
}
