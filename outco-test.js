

var reverseVowels = function(word){
    var vowels = ['a','e','i', 'o', 'u']
    var lastVowelPosition = word.length-1 // start checking with last position

    for (var i = 0; i< word.length; i++) {
        var currentLetter = word[i]
        
            
            while (lastVowelPosition >= 0) {
                // break if it is a vowel
                if (vowels.indexOf(word[lastVowelPosition])!== -1) {
                    break
                }
                // reassign lastVowel to next 
                lastVowelPosition--
            }
            
//             lastVowelPosition = getNextEndVowel(lastVowelPosition, word)  //e
            
            if (vowels.indexOf(currentLetter)===-1) {
                
            } else {
             
                var temp = word[lastVowelPosition]
                word[lastVowelPosition] = word[i]
                word[i] = temp
                
                // reassign lastVowel to next 
                lastVowelPosition--
            }
        
            if (i > lastVowelPosition) {
                // done.
                break;
            }
            
            
    } 
    return word

};


console.log(reverseVowels(['d','a','v','i','d','o','p','e']));
// ['d','e','v','o','d','i','p','a']
