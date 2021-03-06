/* Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct. */

// Link: https://leetcode.com/problems/contains-duplicate/

// Time Complexity: O(n)

// Space Complexity: O(n)

const containsDuplicate = nums => {
    const visitedNums = {} // {7: true, 2: true} 

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (visitedNums[num]) {
            return true;
        } else {
            visitedNums[num] = true;
        }
    }

    return false;
};

module.exports = containsDuplicate;
