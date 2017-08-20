function realSize(arr){

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
  
  return newArr.length;

}