/*
Implement:

function fiveInARow(board, value) {}

You are given an array of arrays (the board).  
The outer array consists of 6 rows and each row has  6 columns.  
As well as the value.  Return true if the array has 5 of the given 
value in a row.  False otherwise.  For example:


var value = 'x';
var board = [   
  [1,2,3,4,5,'x'],
  [1,2,3,4,'x',6],
  [1,2,3,'x',5,6],
  [1,2,'x',4,5,6],
  [1,'x',3,4,5,6],
  [1,2,3,4,5,6]
]
fiveInARow(board, value); // returns true


and

var value = 1;
var board = [   
  [1,2,3,4,5,6],
  [1,2,3,4,5,6],
  [1,2,3,4,5,6],
  [1,2,3,4,5,6],
  [1,2,3,4,5,6],
  [1,2,3,4,5,6]
]
fiveInARow(board, value); // returns true

and

var value = '';
var board = [   
  [1,2,3,4,5,6],
  [1,2,3,4,5,6],
  [1,2,3,4,5,6],
  [1,2,3,4,5,6],
  [1,2,3,4,5,6],
  [1,2,3,4,5,6]
]
fiveInARow(board, value); // returns false
*/

function fiveInARow(board, value) {
  var count = 0;
  var max = 0;
  var arr = [[],[],[],[],[],[]];

  // check rows
  for (var i=0; i<board.length; i++) {
    board[i].reduce(function(acc, next) {
      if (acc === next) {
        count ++;
        if (count > max && acc == value) {
          max = count;
        }
      } else {
        count = 0;
      }
      acc = next;
      return acc;
    })
    if (max + 1 >= 5) { return true; }
  }
  // check columns - make an array that's the transpose of board
  for (var i=0; i<board[0].length; i++) {
    for (var j=0; j<board.length; j++) {
      arr[j][i] = board[i][j];
    }
  }
  // check rows in the new array using same method as above
  count = 0;
  max = 0;
  for (var i=0; i<board[0].length; i++) {
      arr[i].reduce(function(acc, next) {
        if (acc === next) {
          count ++;
          if (count > max && acc == value) {
            max = count;
          }
        } else {
          count = 0;
        }
        acc = next;
        return acc;
      })
      if (max + 1 >= 5) { return true; }
  }
  // check diagonals
  // make array of diagonals
  var arrDiag = [[],[]];
  for (var i=0; i<board[0].length; i++) {
    arrDiag[0].push(board[i][i]);
  }
  for (var i=0; i<board[0].length; i++) {
    arrDiag[1].push(board[i][board.length-1-i]);
  }
  count = 0;
  max = 0;
  for (var i=0; i<arrDiag.length; i++) {
      arrDiag[i].reduce(function(acc, next) {
        if (acc === next) {
          count ++;
          if (count > max && acc == value) {
            max = count;
          }
        } else {
          count = 0;
        }
        acc = next;
        return acc;
      })
      if (max + 1 >= 5) { return true; }
  }
  return false;
}
