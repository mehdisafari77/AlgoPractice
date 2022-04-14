/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. */

// Link: https://leetcode.com/problems/two-sum/

// Time Complexity: O(n)

// Space Complexity: O(n)

function twoSum(arr, target) {
    const numsVisited = {};
    const res = [];
    
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        const complement = target - num;

        if (numsVisited[complement] !== undefined) {
            res.push(i);
            res.push(numsVisited[complement]);
        }
        numsVisited[num] = i;
    }
    return res;
}

// Alt Solution | Hash Table
// 90% faster than solution in leet code

var twoSum = function(nums, target) {
    
    let map = new Map();
        for (let i = 0; i< nums.length; i++) {
            let targetNum = target - nums[i];
            if (map.has(targetNum)) {
                return [map.get(targetNum), i]
            }
            map.set(nums[i], i)
        }
        
    };



module.exports = twoSum;