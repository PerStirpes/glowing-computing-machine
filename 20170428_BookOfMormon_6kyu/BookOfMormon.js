function Mormons(startingNumber, reach, target, counter){

  var counter = counter || 0;
  
  if(startingNumber >= target) {
    return counter;
  }
  
  startingNumber *= (reach + 1);
  counter++;

  return Mormons(startingNumber, reach, target, counter);
 
}