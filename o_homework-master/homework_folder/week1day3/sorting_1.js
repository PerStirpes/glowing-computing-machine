 /********************************************************************** 
  *                                                                    *
  *  Problem: Insertion Sort                                           *
  *                                                                    *
  *  Prompt: Given an unsorted array of numbers,                       *
  *          return a sorted array using insertion sort.               *
  *                                                                    *
  *  Input:  An unsorted array                                         *
  *  Output: A sorted array                                            *
  *                                                                    *
  *  Example: input = [3,9,1,4,7] , output = [1,3,4,7,9]               *
  *                                                                    *
  *  What are the time and auxilliary space complexity?                *
  *                                                                    *
  **********************************************************************/

  /**********************************************************
   *                                                        *
   *  Problem: Selection Sort                               *
   *                                                        *
   *  Prompt: Given an unsorted array of numbers,           *
   *          return a sorted array using insertion sort.   *
   *                                                        *
   *  Input: An unsorted array                              *
   *  Output: A sorted array                                *
   *                                                        *
   *  Example: input = [8,3,2,10] output = [2,3,8,10]       *
   *                                                        *
   *  What are the time and auxilliary space complexity?    *
   *  What is the best case time complexity?                *
   *                                                        *
   **********************************************************/

   /**********************************************************
    *                                                        *
    *  Problem: Bubble Sort                                  *
    *                                                        *
    *  Prompt: Given an unsorted array of numbers,           *
    *          return a sorted array using bubble sort.      *
    *                                                        *
    *  Input: An unsorted array                              *
    *  Output: A sorted array                                *
    *                                                        *
    *  Example: input = [8,3,2,10] output = [2,3,8,10]       *
    *                                                        *
    *  What are the time and auxilliary space complexity?    *
    *                                                        *
    **********************************************************/

var insertionSort = function(arr){
  for (let i = 0; i < arr.length; i++) {
    let currentValue = arr[i];
    for (var j = i - 1; j > -1 && arr[j] > currentValue; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = currentValue;
  }

  return arr;
}




var selectionSort = function(arr){
 
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}


var bubbleSort = function(arr){
  
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}


function swap(arr, idx1, idx2) {
  [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]]
}

////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////

var expect = require('chai').expect;

describe('INSERTION SORT ', function(){

  describe("RUN ON [8, 3, 2, 10]: ", function(){
    it("should return [2, 3, 8, 10]", function(){
      var test = insertionSort([3,9,1,4,7]);
      var answer = [1,3,4,7,9];

      expect(test).to.eql(answer);
    });
  });

  describe("RUN ON EMPTY INPUT []: ", function(){
    it("should return []", function(){
      var test = insertionSort([]);
      var answer = [];

      expect(test).to.eql(answer);
    });
  });

  describe("RUN ON LARGE INPUT: ", function(){
    it("should complete", function(){
      var testInput = [];
      var i = 1000000;
      while (i--){
        testInput.push(Math.floor(Math.random() * 1000000))
      }
      var test = insertionSort(testInput);

      expect(testInput.sort(function(a, b){return a-b})).to.eql(test);
    })
  })

});


describe('SELECTION SORT ', function(){

  describe("RUN ON [8, 3, 2, 10]: ", function(){
    it("should return [2, 3, 8, 10]", function(){
      var test = selectionSort([8,3,2,10]);
      var answer = [2,3,8,10];

      expect(test).to.eql(answer);
    });
  });

  describe("RUN ON EMPTY INPUT []: ", function(){
    it("should return []", function(){
      var test = selectionSort([]);
      var answer = [];

      expect(test).to.eql(answer);
    });
  });

  describe("RUN ON LARGE INPUT: ", function(){
    it("should complete", function(){
      var testInput = [];
      var i = 1000000;
      while (i--){
        testInput.push(Math.floor(Math.random() * 1000000))
      }
      var test = selectionSort(testInput);

      expect(testInput.sort(function(a, b){return a-b})).to.eql(test);
    })
  })

});

describe('BUBBLE SORT ', function(){

  describe("RUN ON [8, 3, 2, 10]: ", function(){
    it("should return [2, 3, 8, 10]", function(){
      var test = bubbleSort([8,3,2,10]);
      var answer = [2,3,8,10];

      expect(test).to.eql(answer);
    });
  });

  describe("RUN ON EMPTY INPUT []: ", function(){
    it("should return []", function(){
      var test = bubbleSort([]);
      var answer = [];

      expect(test).to.eql(answer);
    });
  });

  describe("RUN ON LARGE INPUT: ", function(){
    it("should complete", function(){
      var testInput = [];
      var i = 1000000;
      while (i--){
        testInput.push(Math.floor(Math.random() * 1000000))
      }
      var test = bubbleSort(testInput);

      expect(testInput.sort(function(a, b){return a-b})).to.eql(test);
    })
  })

});