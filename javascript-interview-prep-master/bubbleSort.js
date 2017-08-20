var numbers = [12, 10, 45, 15, 1, 26, 11, 14, 13, 16, 3];
// bubbleSort
function bubbleSort(array) {
    var swapped,
        holder,
        index,
        nextIndex;
    // some() tests whe}ther some element in the array
    // passes the test implemented by the function within
    // returns 'true' if so, and 'false' if not
    do {
        swapped = false;
        for (index = 0; index <= array.length-1; index++) {
            nextIndex = index + 1;
            //if the int BEFORE > int AFTER, then switch them
            if (array[index] > array[nextIndex]) {
                holder = array[index];
                array[index] = array[nextIndex];
                array[nextIndex] = holder;
                swapped=true;
            }
        }
    } while (swapped);

    //return sorted array
    return array;
}

bubbleSort(numbers);


