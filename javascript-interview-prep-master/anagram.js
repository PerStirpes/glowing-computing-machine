function anagram(word1, word2) {
  var rearrange1 = word1.split('').sort().join('');
  var rearrange2 = word2.split('').sort().join('');

  if (rearrange1 === rearrange2) {
    return true;
  }
  return false;
}
