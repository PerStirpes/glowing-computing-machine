/*
1. BST.prototype.find = function(num) {}; // Finds a value in a binary search tree

Given a class Node:

function Node(val, left=null, right=null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

And a class BST:

function BST() {
  this.root = null;
}


Implement find:

BST.prototype.find = function(num) {

}

Find should be a recursive function that looks through the tree for a value.  
If the value is found, return true.  False otherwise.

BONUS

2. BST.prototype.toArray = function() {}

Implement a function that returns a new array that contains every value in the tree.  
Try to implement toArray and maintain the sorted order of the values.
*/

function Node(val, left=null, right=null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function BST() {
  this.root = null;
}

BST.prototype.find = function(num) {

  function helper(start, num) {
    if (start.val === num) {
      return true;
    } 
    if (num > start.val) {
      if (!start.right) return false;
      return helper(start.right, num);
    } else {
      if (!start.left) return false;
      return helper(start.left, num);
    }
  } 
  return helper(this.root,num);
}

BST.prototype.toArray = function(cur=this.root, arr=[]) {
  // base case
  if (cur === null) { return arr;}
  
  // go left
  arr = this.toArray(cur.left, arr);

  // do something with the current
  arr.push(cur.val);

  // go right
  arr = this.toArray(cur.right, arr);

  return arr;
}
