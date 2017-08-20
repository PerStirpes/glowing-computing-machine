/*
You are given:

function HashTable(size=21) {
   this.arr = new Array(size);
   this.largePrime = 22651;
}

You must implement three functions for the hash table.  First:

HashTable.prototype.hashCode = function(key) {
  // The function accepts a key of type string or
  // number. If the value is a string, the hash
  // code will be computed as the first 3 digits
  // of the string converted to ascii and summed
  // multiply the summed value by this.largePrime
  // and then mod that value by this.arr.length
  // If the value is a number, compute the hash
  // code simply by multiplying the number by
  // this.largePrime then mod that number by
  // this.arr.length.  Return Math.floor(hashCode).
}

Next, implement put:

HashTable.prototype.put = function(key, value) {
  // Puts the key and the value as an object into
  // the array.  The position in the array is
  // determined by this.hashCode(key)
}

Next, implement get:

HashTable.prototype.get = function(key, defaultReturn=undefined) {
  // Uses the value of this.hashCode(key) to as the
  // index of the array to lookup.  If an the same
  // key exists at that position, return the value.
  // If the same key does not exist at that
  // position, return the defaultReturn value.
}
*/

function HashTable(size=21) {
   this.arr = new Array(size);
   this.largePrime = 22651;
}

HashTable.prototype.hashCode = function(key) {
  if (typeof(key) === "string") {
    key = key[0].charCodeAt() + key[1].charCodeAt() + key[2].charCodeAt();
  }
  var result = key * this.largePrime;
  return Math.floor(result % this.arr.length);
}

HashTable.prototype.put = function(key, value) {
  this.arr[this.hashCode(key)] = {key, value};
}

HashTable.prototype.get = function(key, defaultReturn=undefined) {

  if (this.arr[this.hashCode(key)] === undefined) {
    return defaultReturn;
  } 
  if (this.arr[this.hashCode(key)].key === key) {
    return this.arr[this.hashCode(key)].value;
  }
  return defaultReturn;
}
