// Given a string s, return true if it is a palindrome, or false otherwise.

// Link: https://leetcode.com/problems/valid-palindrome/

function isPalindrome(s) {
    s = s.toLowerCase().replace(/[\W_]/g, "");

    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if(s[left] !== s[right]) {
            return false
        }
        left++
        right--
    }
    return true
}

module.exports = isPalindrome;
