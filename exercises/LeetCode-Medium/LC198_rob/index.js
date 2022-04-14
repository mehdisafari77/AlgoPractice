/* You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night. 

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.*/

// Link: https://leetcode.com/problems/house-robber/

// Time Complexity: O(n)

// Space Complexity: O(n) Can be optimized to O(1) with two number variables

function rob(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);

    let maxLootAtNth = [nums[0], Math.max(nums[0], nums[1])];

    for (let i = 2; i < nums.length; i++) {
        maxLootAtNth.push(Math.max(nums[i] + maxLootAtNth[i - 2], maxLootAtNth[i - 1]))
    }

    return maxLootAtNth.pop();
}

module.exports = rob;
