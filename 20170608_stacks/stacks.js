/*
A stack is a LIFO data structure.

You are given two constructor functions: one for Node and one for Stack. 
Your goal is to implement the following methods on the Stack prototype:

push - takes in a node and puts it at the top of the stack. 
Should return the new length of the stack.

pop - removes the node at the top of the stack and returns it.

string - returns a string representation of the nodes on the stack in order.

*/

function Node(val) {
  this.val = val;
  this.next = null;
}

function Stack() {
  this.top = null
  this.length = 0;
}

Stack.prototype.push = function(node) {
    var topNow = this.top;
    this.top = node;
    this.top.next = topNow;
    this.length++;
    return this.length;
}

Stack.prototype.pop = function() {
    if (this.top === null) return this.top;
    var topNow = this.top;
    this.top = this.top.next;
    this.length--;
    topNow.next = null;
    return topNow;
}

Stack.prototype.toString = function() {
    var str = "";
    var topNow = this.top;
    while (topNow) {
        str = str.concat(topNow.val);
        topNow = topNow.next;
        if (topNow) {
          str = str.concat(" -> ");
        }
    }
    return str;
}
