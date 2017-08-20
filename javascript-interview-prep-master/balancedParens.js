function balancedParens(str) {
  var stack = [];
  var open = {
    '{': '}',
    '[': ']',
    '(': ')'
  }
  var closed = {
    '}': true,
    ']': true,
    ")": true
  }

  for (var i = 0; i < str.length; i++) {
    var chr = str[i];
    if (open[chr]) {
      stack.push(chr);
    } else if (closed[chr]) {
      if (open[stack.pop()] !== chr) {
        return false;
      }
    }
  }
  return stack.length === 0;
  //return true; if stack.length === 0
  // else, return false. because if there's anything
  // left in the stack, then it means that there
  // were a disproportionate amount of parens
};

console.log(balancedParens("{da}}"));
console.log(balancedParens("{()}"));
console.log(balancedParens("()"));
console.log(balancedParens("({"));
