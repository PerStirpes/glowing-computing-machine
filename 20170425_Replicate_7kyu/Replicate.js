function replicate(times, number) {
    //return an array containing repetitions of the number argument
    // ex: replicate (3,5) should return [5,5,5]
    // if times is negative, return []
    if (times<0) return [];

    var newArr = [];

    function helper3(t, num){
        if (t>0) {
            newArr.push(num);
            t--
            helper3(t,num);
        } 
    }

    helper3(times,number);
    return newArr;
}

