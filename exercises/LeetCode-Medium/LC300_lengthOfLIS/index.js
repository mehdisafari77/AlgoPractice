/* Given an integer array nums, return the length of the longest strictly increasing subsequence. A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7]. */

// Link: https://leetcode.com/problems/longest-increasing-subsequence/

// Time Complexity: O(N2)

// Space Complexity: O(N)

function lengthOfLIS(nums) {
    if (nums.length === 0) return 0;

    let dpSubsequence = new Array(nums.length).fill(1);
    let maxSoFar = 1;

    for (let j = 1; j < nums.length; j++) {
        for (let i = 0; i < j; i++) {
            if (nums[j] > nums[i]) {
                dpSubsequence[j] = Math.max(dpSubsequence[i] + 1,dpSubsequence[j])
            }  
        }
        maxSoFar = Math.max(maxSoFar, dpSubsequence[j]);
    }
    return maxSoFar;
}

module.exports = lengthOfLIS;
