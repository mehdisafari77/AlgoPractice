/* Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets. */

// Link: https://leetcode.com/problems/3sum/

// Time Complexity: O(n)

// Space Complexity: O(n)

const threeSum = nums => {
    nums.sort((a, b) => a - b);
    let res = [];

    for (let i = 0; i < nums. length; i++) {
        const target = 0 - nums[i];
        let left = i + 1;
        let right = nums.length - 1;

        if (i > 0 && nums [i] === nums [i - 1]) {
            continue;
        }

        while (left < right) {
        if (nums[left] + nums[right] === target) {
            res.push([nums[i], nums[left], nums[right]]);
            left++;
            while (nums[left] === nums[left - 1]) {
                left++
            }
        } else if (nums[left] + nums[right]
        < target) {
            left++;
        } else {
            right--;
        }
    }
}
return res
}

module.exports = threeSum;
