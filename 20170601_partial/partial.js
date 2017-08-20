/*
Partial application refers to the process of taking a function and returning a new function until all parameters to that function have been passed. The function that is partially applied, eventually resolves with a value once all parameters have been passed to it.

Here’s a basic example of how you’d use it:

function add(a,b,c){
  return a+b+c;
}

var partialAdd = partial(add);

partialAdd(1)()()()(2,3) // 6
*/

function partial(fn) {
  var numParams = fn.length;

  return function partialHelper(...args) {
    if(args.length >= numParams) {
      return fn(...args);
    }
    return function newFn(...newArgs) {
      return partialHelper(...args.concat(...newArgs));
    }
  }
}
