function iqTest(numbers){
  numbers = numbers.split(" ");
  if(+numbers[0] % 2 !== +numbers[1] % 2 && +numbers[1] % 2 == +numbers[2] % 2){
    return 1;
  }
  for(var i=0; i<numbers.length; i++) {
    if(+numbers[i] % 2 !== +numbers[0] % 2) {
      return i+1;
    }
  }
}

/* best practices:

function iqTest(numbers){
  numbers = numbers.split(" ").map(function(el){return parseInt(el)});
  
  var odd = numbers.filter(function(el){ return el % 2 === 1});
  var even = numbers.filter(function(el){ return el % 2 === 0});
  
  return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
}

*/