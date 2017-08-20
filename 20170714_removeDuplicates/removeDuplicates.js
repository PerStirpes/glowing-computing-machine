/*
Given a sorted array, remove the duplicates in place such that each 
element appear only once and return the new length.

Do not allocate extra space for another array, you must do this in 
place with constant memory.

For example,
Given input array nums = [1,1,2],

Your function should return length = 2, with the first two elements 
of nums being 1 and 2 respectively. It doesn't matter what you leave 
beyond the new length.
*/


var removeDuplicates = function(nums) {
    for (let i=1; i < nums.length; i++) {
        if(nums[i] === nums[i-1]) {
            nums.splice(i,1);
            i--;
        }
    }
    return nums.length;
};

/* two pointer solution:

var removeDuplicates = function(nums) {
    let i = 0;
    for (let j = 1; j<nums.length; j++) {
        if (nums[i] != nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};

*/
