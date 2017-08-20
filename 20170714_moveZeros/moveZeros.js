/*
Given an array nums, write a function to move all 0's to the end 
of it while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, 
nums should be [1, 3, 12, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

function moveZeroes(nums) {
    let i = 0, j = 1;
    while (i < nums.length && j < nums.length) {
        if (nums[i] === 0) {
            while (nums[j] === 0 && j < nums.length - 1) {
                j++;
            }
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
        i++;
        j++;
    }
    return nums;
}

// OLDER WAY

// var moveZeroes = function(nums) {
//     for (let i = 0; i < nums.length - 1; i++) {
//         if(nums[i] === 0) {
//             let j = i + 1;
//             while (nums[j] === 0 && j < nums.length - 1) {
//                 j++;
//             }
//             [nums[i], nums[j]] = [nums[j], nums[i]];
//         }
//     }
// }
