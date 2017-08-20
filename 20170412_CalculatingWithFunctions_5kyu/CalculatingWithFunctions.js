function zero(callback) {
  if (arguments.length === 0) {
    return 0;
  }
  return callback(0);
}

function one(callback) {
  if (arguments.length === 0) {
    return 1;
  }
  return callback(1);
}

function two(callback) {
  if (arguments.length === 0) {
    return 2;
  }
  return callback(2);
}

function three(callback) {
  if (arguments.length === 0) {
    return 3;
  }
  return callback(3);
}

function four(callback) {
  if (arguments.length === 0) {
    return 4;
  }
  return callback(4);
}

function five(callback) {
  if (arguments.length === 0) {
    return 5;
  }
  return callback(5);
}

function six(callback) {
  if (arguments.length === 0) {
    return 6;
  }
  return callback(6);
}

function seven(callback) {
  if (arguments.length === 0) {
    return 7;
  }
  return callback(7);
}

function eight(callback) {
  if (arguments.length === 0) {
    return 8;
  }
  return callback(8);
}

function nine(callback) {
  if (arguments.length === 0) {
    return 9;
  }
  return callback(9);
}

function plus(a) {
  return function(b) {
    return a + b;
  }
}

function minus(a) {
  return function(b) {
    return  b - a;
  }
}

function times(a) {
  return function(b) {
    return a * b;
  }
}

function dividedBy(a) {
  return function(b) {
    return b / a;
  }
}


/* best practice:

var n = function(digit) {
  return function(op) {
    return op ? op(digit) : digit;
  }
};
var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(r) { return function(l) { return l + r; }; }
function minus(r) { return function(l) { return l - r; }; }
function times(r) { return function(l) { return l * r; }; }
function dividedBy(r) { return function(l) { return l / r; }; }

*/