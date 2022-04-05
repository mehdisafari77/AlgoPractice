/* Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

A subarray is a contiguous subsequence of the array. */

// Link: https://leetcode.com/problems/maximum-product-subarray/

// Time Complexity: O(n)

// Space Complexity: O(1)

function maxProduct(nums){
    let maxTillIndex = [nums[0]];
    let minTillIndex = [nums[0]];
    let max = nums [0];

    for (let i = 1; i < nums. length; i++) {
        const num = nums[i];
        maxTillIndex[i] = Math.max(
            num,
            num * maxTillIndex[i - 1],
            num * minTillIndex[i - 1]
        );

        minTillIndex[i] = Math.min(
            num,
            num * maxTillIndex[i - 1],
            num * minTillIndex[i - 1]
        );

        max = Math.max(max, maxTillIndex[i]);
    }
    return max;
}
module.exports = maxProduct;
