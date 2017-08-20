// Katie Krieger
// 3/29/17
// https://www.codewars.com/kata/556deca17c58da83c00002db


function tribonacci(signature,n){
  if(n<3) {
    for(var i=1; i<=(3-n); i++){
      signature.pop(); // if n = 0, want 3 times. if n = 1, want 2. if n = 2, want 1.
    }
  }
  for(var i=3; i<n; i++) {
    signature.push(signature[i-3]+signature[i-2]+signature[i-1]);
  }
  return signature;
}

/* best practices:

function tribonacci(signature,n){  
  for (var i = 0; i < n-3; i++) { // iterate n times
    signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
  }
  return signature.slice(0, n); //return trib - length of n
}

----or----

function tribonacci(s,n){
  var arr = [];
  for(var i=0; i<n; i++) {
    arr.push((i<3) ? s[i] : arr[i-1]+arr[i-2]+arr[i-3]);
  }
  return arr;
}