/* Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).*/

// Link: https://leetcode.com/problems/median-of-two-sorted-arrays/

// Time Complexity: 

// Space Complexity: 

var findMedianSortedArrays = function(nums1, nums2) {
    const nums = nums1.concat(nums2)
    nums.sort( function(a,b) { return a - b; } )
    if (((nums.length + 1) % 2 ) === 0){
         let median = (nums.length + 1)/2
          //find the index of the median in the array
         return nums[median - 1]
 //you need to subtract one from the index since arrays start at 0
     
     } else {
       let first = (nums.length/2) 
       //index of the first median
       let second = first + 1
       //index of the second median
       let med1 = nums[first - 1]
       let med2 = nums[second - 1]
       const median = (med1 + med2)/2 
       //calculate the average of the two medians 
       return median 
    }    
};