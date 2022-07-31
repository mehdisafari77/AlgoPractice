/* 
Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

0 <= a, b, c, d < n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order.

Example 1:

Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
Example 2:

Input: nums = [2,2,2,2,2], target = 8
Output: [[2,2,2,2]]
*/

// Link: https://leetcode.com/problems/4sum/

var fourSum = function (nums, target) {
    let solutionArrays = [];

    // Sort the array
    sortedNums = nums.sort((a, b) => a - b);

    // Loop through the array (excluding the last 3 entries)
    for (let i = 0; i < sortedNums.length - 3; i++) {
        // Check if this is the same number as the last one
        if (i > 0 && sortedNums[i] == sortedNums[i - 1]) {
            continue;
        }

        // Loop through the remaining numbers
        for (let j = i + 1; j < sortedNums.length - 2; j++) {
            // Check if this is the same number as the last one
            if (j > i + 1 && sortedNums[j] == sortedNums[j - 1]) {
                continue;
            }

            // Establish a window from the next number to the end of the array
            let left = j + 1;
            let right = sortedNums.length - 1;

            // Run until the window is closed
            while (left < right) {
                // Add together the current numbers, and each side of the window
                const total =
                    sortedNums[i] +
                    sortedNums[j] +
                    sortedNums[left] +
                    sortedNums[right];

                // If we've reached an answer, add it to the array of answers
                if (total == target) {
                    solutionArrays.push([
                        sortedNums[i],
                        sortedNums[j],
                        sortedNums[left],
                        sortedNums[right],
                    ]);

                    // Move the left-hand edge of the window to the right until it reaches a different number
                    do {
                        left++;
                    } while (sortedNums[left] == sortedNums[left - 1]);

                    // Move the right-hand edge of the window to the left until it reaches a different number
                    do {
                        right--;
                    } while (sortedNums[right] == sortedNums[right + 1]);
                }
                // If we're too low
                else if (total < target) {
                    left++;
                }
                // If we're too high
                else {
                    right--;
                }
            }
        }
    }

    return solutionArrays;
};