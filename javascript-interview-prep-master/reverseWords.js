function reverseWords(str) {
  var arr = str.split(' ');
  var newArr = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr.join(' ');
}

var foo = "Hello";
(function() {
  var bar = " World";
  return foo + bar;
})();
return foo + bar;
