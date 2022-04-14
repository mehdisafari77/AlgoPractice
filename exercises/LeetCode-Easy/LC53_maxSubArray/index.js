/* Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets. */

// Link: https://leetcode.com/problems/maximum-subarray/

// Time Complexity: O(n2)

// Space Complexity: O(1)

function maxSubArray(nums){
    //let dp = [nums[0]J;
    let max = nums [0] ;

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        nums[i] = Math.max(num, num + nums[i - 1]);
        max = Math.max(max, nums[i]);
    }
        return max;
    }
    
module.exports = maxSubArray;
