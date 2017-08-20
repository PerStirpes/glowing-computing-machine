function hofstadterQ(n) {
  
  var Q = [];
  Q[0] = null;
  Q[1] = 1;
  Q[2] = 1;

  function hQHelper(N) { 
    for (var i = 3; i<=N; i++) {
        Q.push(Q[i - Q[i-1]] + Q[i - Q[i-2]]);
    }
  }
  
  if(n>2) {
      hQHelper(n);
  }
  
  return Q[n];
}

/* best practice (just one vote)

let hofstadterQ = (function() {
   let arr = [1,1,1];
   let f = (n) => {
      if(arr[n] !== undefined) return arr[n];
      else {
        let r = f(n - f(n-1)) + f(n - f(n-2));
        arr[n] = r;
        return r;
      }
   };
   return f;
}());

*/