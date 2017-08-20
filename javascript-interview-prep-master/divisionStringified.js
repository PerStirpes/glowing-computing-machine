function DivisionStringified(num1,num2) {

  var s = Math.round(num1 / num2) + '',
      res = '';

  for (var i = s.length - 1; i >= 0; i--) {
    // 'i' can't be the last integer in the number (1,774, doesn't make sense)
    //
    if (i != s.length - 1 && (s.length - i - 1) % 3 == 0) {
      res = ',' + res;
    }

    res = s[i] + res;
  }

  return res;

}
