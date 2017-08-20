

function uncompress(music) {
    // until 9:50
    
    var newArr = [];

    function uncompressHelper(mus){

        // split into each element
        var musArr = mus.split(",");

        // iterate over all elements
        for(var i=0; i<musArr.length; i++){

            // determine the type of operation

            if (musArr[i].split("/").length === 2) {
                var multiple = +musArr[i].split("/")[1];
                musArr[i] = musArr[i].split("/")[0]; // override so we can use same logic in "range" if statement
            }

            if (musArr[i].split("*").length === 2) {
                var type = "multiply";
                var toRepeat = +musArr[i].split("*")[0];
                var numTimes = +musArr[i].split("*")[1];
            }

            else if (musArr[i].split(" - ").length === 2 || 
                        musArr[i].split("-").length === 2 ||
                        musArr[i].split("-").length === 3) {
                type = "range";

                start = +musArr[i].split("-")[0]; 
                end = +musArr[i].split(" - ")[1] || +musArr[i].split("-")[1];

                if(start === 0 && musArr[i].split("-").length === 3) {
                    // first number is negative
                    start = -musArr[i].split("-")[1];
                    end = +musArr[i].split("-")[2];
                }

                if(start === 0 && musArr[i].split("-").length === 4) {
                    // first number is negative but neg sign will get lost
                    start = -musArr[i].split("-")[1];
                    end = -musArr[i].split("-")[3];
                }

                console.log(i,start,end);
                multiple = 1;
                // end is positive of negative
            }
            
            else {
                newArr.push(+musArr[i]);
            }

            // push the ranges of numbers:
            if(type === "range") {
                if(start < end) {
                    for (var j=start; j<=end; j+=multiple){
                        newArr.push(j);
                    }
                } else if (start > end) {
                    for (var j=start; j>=end; j-=multiple){
                        newArr.push(j);
                    }
                } 
            }

            // if it has a *:
            if(type === "multiply") {
                for (var k=1; k<=numTimes; k++) {
                    newArr.push(toRepeat);
                }
            }

        }
    }

    uncompressHelper(music);
    return newArr;
}


uncompress("2, -3 - -1, 5*3, -4 - -8/2"); 