function snail (array) {


    var newArr = [];

    function snailHelper(arr) {

        if(arr.length === 0) {
            return newArr;
        }

        if(arr[0].length === 0) {
            return newArr;
        }

        if(arr.length === 1) {
            newArr.push(arr[0][0]);
            return newArr;
        }

        // shift off top (first) array
        newArr = newArr.concat(arr.shift());

        // pop off last elements of all arrays
        for (var i=0; i<arr.length; i++) {
            newArr.push(arr[i].pop());
        }

        // reverse last array and concat
        newArr = newArr.concat(arr[arr.length-1].reverse());
        arr.pop();

        // shift the right elements in all arrays starting at last
        for (var j=arr.length-1; j>=0; j--) {
            newArr.push(arr[j].shift());
        }

        snailHelper(arr);

    }

    snailHelper(array);
    return newArr;

}