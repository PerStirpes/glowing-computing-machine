function findOdd(A) {
  var ASorted = A.sort(); // sort A array
  var counter = {}; // set a counter object
  for(var i=0; i<A.length; i++){
    counter[ASorted[i]] = 1; // set counter to 1 for all elements in A
  }
  for(var i=1; i<A.length+1; i++){
    if(ASorted[i] === ASorted[i-1]){ // check for repeat digits
      counter[ASorted[i]] = counter[ASorted[i]] + 1; // add 1 to counter
    }
  }
  for(var num in counter){
    if(counter[num] % 2 !== 0){ // check for odd number
      return +num;
    }
  }  
  return 0;
}


/* highly ranked solutions:

function findOdd(A) {
  var obj = {};
  A.forEach(function(el){
    obj[el] ? obj[el]++ : obj[el] = 1;
  });
  
  for(prop in obj) {
    if(obj[prop] % 2 !== 0) return Number(prop);
  }
}

------------ or ---------------

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
