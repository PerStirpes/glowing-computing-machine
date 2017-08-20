function countAll2s(num) {
  var numbers = [];
  var 2count = 0;
   for (var i = 0; i <= num; i++) {
    numbers.push(i);
   }

   for (var j = 0; j < numbers.length; j++) {
      2count = numbers.match(/2/g).length;
   }
   return 2count;
}
