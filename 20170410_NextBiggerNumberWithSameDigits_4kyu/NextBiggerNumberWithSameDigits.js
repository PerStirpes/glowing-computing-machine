function nextBigger(n){
  if(n.lenth === 0) {
    return -1;
  }
  var arr = n.toString().split("");
  for(var i=arr.length-1; i>0; i--) { 
    if(arr[i-1] < arr[i]) { 
      var smallest = arr[i-1]; 
      var min = 10;
      var index = -1;
      var stopi = i-1;
      for(var j=i; j<arr.length; j++) { 
        if(arr[j] < min && arr[j] > smallest) { 
          min = arr[j];
          index = j;
        }
      }
      var holder = arr[index];
      arr[index] = smallest;
      arr[stopi] = holder;
      arrSort = arr.splice(stopi+1).sort();
      arr = arr.concat(arrSort);
      return +arr.join("");
    } 
  }
  return -1;
}

/* reference used: 
http://www.geeksforgeeks.org/find-next-greater-number-set-digits/


best practices:

function nextBigger(n){
  console.log(n);
  var chars = n.toString().split('');
  var i = chars.length-1;
  while(i > 0) {
    if (chars[i]>chars[i-1]) break;
    i--;
  }
  if (i == 0) return -1;
  var suf = chars.splice(i).sort();
  var t = chars[chars.length-1];
  for (i = 0; i < suf.length; ++i) {
    if (suf[i] > t) break;
  }
  chars[chars.length-1] = suf[i]
  suf[i] = t;
  var res = chars.concat(suf);
  var num = parseInt(res.join(''));
  console.log("->" +num);
  return num;
}

*/