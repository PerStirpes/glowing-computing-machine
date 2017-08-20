function validParentheses(str) {
  if(str[0] === ")"){
    // should have also checked for odd str.length and for ending "("
    // all things that should immediately return false
    return false;
  }
  var counter = 0;
  var outArr = str.split("");
  while (counter < str.length/2) {
    for (var i=0; i<outArr.length; i++) {
      if(outArr[i] === "(" && outArr[i+1] === ")") {
        outArr.splice(i,2);
      }
    }
    counter++;
  }
  return outArr.length === 0 ? true : false;
  // line above could have been just: return outArr.length;
}

/* best practices:

function validParentheses(string){
   var tokenizer = /[()]/g, // ignores characters in between; parentheses are
       count = 0,           // pretty useless if they're not grouping *something*
       token;
   while(token = tokenizer.exec(string), token !== null){
      if(token == "(") {
         count++;
      } else if(token == ")") {
         count--;
         if(count < 0) {
            return false;
         }
      }
   }
   return count == 0;
}


most clever:

function validParentheses(parens){
  var indent = 0;
  
  for (var i = 0 ; i < parens.length && indent >= 0; i++) {
    indent += (parens[i] == '(') ? 1 : -1;    
  }
  
  return (indent == 0);
}

*/