/*
A queue is another commonly-used data structure in computer science. 
Like a stack, it basically consists of a list of nodes. Unlike a stack, 
however, a queue is a FIFO (first in, first out) data structure - 
the first thing to be added to the queue will also be the first thing to be removed.

You are given two constructor functions: one for Node and one for Queue. 
Your goal is to implement the following methods on the Queue prototype:

enqueue - takes in a node and puts it at the end of the queue. 
Should return the new length of the queue.

dequeue - removes the node at the front of the queue and returns it.

toString - returns a string representation of the nodes in the queue in order.
*/

function Node(val) {
  this.val = val;
  this.prev = null;
}

function Queue() {
  this.first = null;
  this.last = null;
  this.length = 0;
}

Queue.prototype.enqueue = function(node) {
  if(this.length === 0) {
    this.first = node;
    this.last = node;
  } else {
    let last = this.last;
    this.last = node;
    last.prev = node;
  }
  this.length++;
  return this.length;
}

Queue.prototype.dequeue = function() {
  if (this.length === 0 ) {
    this.length = 0;
    this.first = null;
    this.last = null;
    return null;
  }
  if (this.length === 1) {
    this.length = 0;
    let curFirst = this.first
    this.first = null;
    this.last = null;
    return curFirst;
  }
  let curFirst = this.first;
  this.first = this.first.prev;
  curFirst.prev = null;
  this.length--;
  return curFirst;
}

Queue.prototype.toString = function() {
  let cur = this.first;
  let arr = [];
  while (cur) {
    arr.push(cur);
    cur = cur.prev;
  }
  let str = "";
  for (let i = arr.length - 1; i >=0 ; i--) {
    str += arr[i].val;
    if(i != 0) {
      str += " <- ";
    } 
  }
  return str;
}
