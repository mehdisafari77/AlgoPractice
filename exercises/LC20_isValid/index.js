// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// Time Complexity: O(n) We iterate through input just once

// Space Complexity: O(n) In worst case, stack is same length as input string


const isValid = s => {
    let stack = [];
    let pairsHashMap = { "(": ")", "{": "}", "[": "]" };

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (pairsHashMap[char]) {
            stack.push(char);
        } else if (pairsHashMap[stack.pop()] !== char) {
            return false;
        }
    }

    return stack.length === 0
};

module.exports = isValid;
