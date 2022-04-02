
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

//Link: https://leetcode.com/problems/group-anagrams/

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
