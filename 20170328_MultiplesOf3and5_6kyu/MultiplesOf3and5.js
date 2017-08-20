function solution(number){
  var count = 0;
  for(var i=0; i<number; i++){
    (i % 3 === 0 || i % 5 === 0) ? count += i : false;
  }
  return count;
}

/* 
Best practices solution:

function solution(number){
  var sum = 0;
  
  for(var i = 1;i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}

---OR---

Most clever solution:

function solution(number){
  var n3 = Math.floor(--number/3), n5 = Math.floor(number/5), n15 = Math.floor(number/15);
  return (3 * n3 * (n3 + 1) + 5 * n5 * (n5 + 1) - 15 * n15 * (n15+1)) /2;
}

More about arithmetic sequences here:
http://www.mathcentre.ac.uk/resources/uploaded/mc-ty-apgp-2009-1.pdf

In this code, they used the formula to calculate the sum of an 
arithmetric progression in terms of its first and last terms, a and l,
and the number of terms n:

S_n = (1/2) * n * (2 * a + (n-1) * d)

They calculated: S_3 + S_5 - S_15 to avoid double counting those 
that are multiples of both.

For example:

S_3:
	n = Math.floor(number/3) = n3 --> number of terms in sequence
	a = 3 --> first term
	d = 3 --> common difference in sequence

Thus, S_3 = (1/2) * n3 * (2 * 3 + (n3-1) * 3)
		  = (1/2) * n3 * 3 * (n3 + 1)

*/

