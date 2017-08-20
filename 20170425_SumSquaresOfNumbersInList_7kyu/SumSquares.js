function SumSquares(arr){

  var newArr = [];
  
  function flattenHelper(array){
    for (var i=0; i<array.length; i++) {
        if(Array.isArray(array[i])) {
            flattenHelper(array[i]);
        } else {
            newArr.push(array[i]);
        }
    } 
  }
  
  flattenHelper(arr);
  console.log(newArr);
  var sum = 0;
  for (var i=0; i<newArr.length; i++) {
      sum += newArr[i]*newArr[i];
  }
  return sum;

}