function zeros (n) {
  /* sum of Math.floor(n/(5^i)) from i=1 while 
  Math.floor(n/(5^i)) is greater than or equal to 1
  see http://www.purplemath.com/modules/factzero.htm 
  */
  if(n===0){
    return 0;
  }
  var i = 1; // starting value
  var sum = 0;
  while((n/Math.pow(5,i)) >= 1) {
    sum += Math.floor(n/Math.pow(5,i)); 
    i++;
  }
  return sum;
}


/* best practices solution:

function zeros (n) {
  var zs = 0;
  while(n>0){
    n=Math.floor(n/5);
    zs+=n
  }
  return zs;
}

n = 11 test case

zs = 0

n = Math.floor(11/5) = 2
zs = 1

n = Math.floor(2/5) = 0
zs = 2

stops because n is no longer > 0
zs = 2

*/