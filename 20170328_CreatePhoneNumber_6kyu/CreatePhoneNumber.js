function createPhoneNumber(numbers){
  return '(' + 
  numbers[0] + 
  numbers[1] + 
  numbers[2] + 
  ') ' + 
  numbers[3] + 
  numbers[4] + 
  numbers[5] + 
  '-' + 
  numbers[6] + 
  numbers[7] + 
  numbers[8] + 
  numbers[9];
}

/* Better solutions:

function createPhoneNumber(numbers){
  numbers = numbers.join('');
  return '(' + numbers.substring(0, 3) + ') ' 
      + numbers.substring(3, 6) 
      + '-' 
      + numbers.substring(6);
}


---OR---

function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}