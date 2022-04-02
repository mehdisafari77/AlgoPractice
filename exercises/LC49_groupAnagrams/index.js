
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// Link: https://leetcode.com/problems/group-anagrams/

// Time complexity: O(N K log K) Where N is # of strings, K is length of strings

// Space Complexity: O(N K) Data stored in our grouped Hash Table

function groupAnagrams(strs) {
    let grouped = {};

    for (let i = 0; i < strs.length; i++) {
        const word = strs[i];
        const key = word.split('').sort().join('');

        if (!grouped[key]) {
            grouped[key] = []
        };

        grouped[key].push(word);
    }

    return Object.values(grouped);
}

module.exports = groupAnagrams;
