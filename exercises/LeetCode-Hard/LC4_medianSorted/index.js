/* Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).*/

// Link: https://leetcode.com/problems/median-of-two-sorted-arrays/

// Time Complexity: 

// Space Complexity: 

var findMedianSortedArrays = function (nums1, nums2) {
    // Merge and sort the arrays
    const mergedArrays = nums1.concat(nums2);
    mergedArrays.sort((a, b) => a - b);

    // Obtain the middle (middle-left if there are an even number of elements) point
    const middleLeft = Math.floor(mergedArrays.length / 2);

    // Check if there are an odd number of values
    if (mergedArrays.length % 2) {
        // Return the middle value
        return mergedArrays[middleLeft];
    } else {
        // Return the average of the middle 2 values
        return (mergedArrays[middleLeft] + mergedArrays[middleLeft + 1]) / 2;
    }
};