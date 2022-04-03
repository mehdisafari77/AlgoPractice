/* You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position. Return true if you can reach the last index, or false otherwise. */

// Link: https://leetcode.com/problems/jump-game/

// Time Complexity: O(N2)

// Space Complexity: O(N2)

function canJump(nums) {
    let dpPositions = new Array(nums.length).fill(false);
    dpPositions[0] = true;

    for (let j = 1; j < nums.length; j++) {
        for (let i = 0; i < j; i++) {
            if (dpPositions[i] && i + nums[i] >= j) {
                dpPositions[j] = true;
                break;
            }
        }
    }

    return dpPositions[dpPositions.length - 1];
}

module.exports = canJump;
