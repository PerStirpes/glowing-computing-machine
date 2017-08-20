// iterative
function fibonacci(num) {
  var holder,
      firstNum = 0,
      secondNum = 1;

  for (var i = 0; i < num; i++) {
    holder = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = holder
  }

  return holder;

}

// recursive
function fibonacci(num) {
  if (num < 2) {
    return 1;
  } else {
    return fibonacci(num-2) + fibonacci(num-1)
  }
}
