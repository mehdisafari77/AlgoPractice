/* Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation. */

// Link: https://leetcode.com/problems/contains-duplicate/

// Time Complexity: O(N * M)

// Space Complexity: O(N * M)

const productExceptSelf = nums => {
    let output = nums.map(n => 1);
    let product = 1;

    for (let i = 0; i < nums.length; i++) {
        output[i] = output[i] * product;
        product = product * nums[i];
    }

    product = 1
    for (let j = nums.length - 1; j >= 0; j--) {
        output[j] = output[j] * product;
        product = product * nums[j];
    }

    return output;
};

module.exports = productExceptSelf;
