/* There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity. */

// Link: https://leetcode.com/problems/search-in-rotated-sorted-array/

// Time Complexity: O(log n)

// Space Complexity: O(1)

function findMinIdx(rotatedSortedArr) {
    let left = 0;
    let right = rotatedSortedArr.length - 1;

    if (rotatedSortedArr. length === 1) {
        return 0;
    }

    if (rotatedSortedArr[left] < rotatedSortedArr[right]) {
        return 0;
    }
    
    while (left <= right) {
        const mid = Math. floor((left + right) / 2)

        if (rotatedSortedArr[mid] < rotatedSortedArr[mid - 1]) {
            return mid;
        }

        if (rotatedSortedArr[mid] > rotatedSortedArr[mid + 1]) {
            return mid + 1;
        }

        if (rotatedSortedArr[mid] < rotatedSortedArr[left]) {
            right =  mid - 1;
        } else {
            left = mid + 1
        }
    }
    return -1
}

function binarySearch(nums, target, left, right) {
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

function search(nums, target) {
    const minIdx = findMinIdx(nums);

    const left = binarySearch(nums, target, 0, minIdx - 1);
    const right = binarySearch(nums, target, minIdx, nums.length - 1)

    return Math.max(left, right);
}

module.exports = search;
