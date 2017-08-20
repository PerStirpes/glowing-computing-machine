

// Not working yet


function uncompress(music) {
    // until 9:50
    
    var newArr = [];

    function uncompressHelper(mus){
        var musArr = mus.split(",");
        for(var i=0; i<musArr.length; i++){
            var each = musArr[i].split("-");
            console.log("each",each);

            // if it's just a number, return that:
            if(each.length === 1 && each[0].length === 1) {
                newArr.push(+musArr[i]);
            }

            // if it's a string with a / second from the end:
            var multiple = 1;
            if(each.length > 1 && each[1].split("/").length === 2){
                multiple = each[1].split("/")[1];
                each[1] = each[1].split("/")[0];
            }
            if(each.length > 1) {
                if(+each[0] < +each[1]) {
                    for (var j=0; j<=each.length; j++){
                        console.log("here",each,each.length);
                        newArr.push(+musArr[i][0] + j*multiple);
                    }
                } else if (+each[0] > +each[1]) {
                    for (var j=0; j<=each.length; j++){
                        newArr.push(+each[0] - j*multiple);
                    }
                 } 
            }

            // if it has a *:
            if(each[0].split("*").length === 2){
                multiple = each[0].split("*")[1];
                each[1] = each[0].split("*")[0];
                for (var k=1; k<=multiple; k++) {
                    newArr.push(+each[1]);
                }
            }
        }
    }

    uncompressHelper(music);
    return newArr;
}
