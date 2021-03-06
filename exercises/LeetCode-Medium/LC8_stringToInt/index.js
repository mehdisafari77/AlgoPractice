/* Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

The algorithm for myAtoi(string s) is as follows:

Read in and ignore any leading whitespace.
Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
Return the integer as the final result.
Note:

Only the space character ' ' is considered a whitespace character.
Do not ignore any characters other than the leading whitespace or the rest of the string after the digits. */

// Link: https://leetcode.com/problems/string-to-integer-atoi/

// Solution 1

// Time Complexity:

// Space Complexity:

var myAtoi = function(s) {
    const len = s.length;
    let max = 2147483647;
    let min = -2147483648;
    let numberMatch = /^[\d ()+-]+$/;
  
    for (let i = 0, j = i; i < len; i++) {
      let current = s[i];
  
      if (current != " " && !current.match(numberMatch)) {
          return 0;
      } else if (current != " " && current.match(numberMatch)) {
        let result = "";
  
        while (j < len && current.match(numberMatch)) {
          result += s[j];
          j++;
        }
        let output = parseInt(result);
        if (isNaN(output)) return 0;
        else if (output > max) return max;
        else if (output < min) return min;
        else return output;
      }
    }
    return 0;
  };

// Solution 2

// Time Complexity:

// Space Complexity:

var myAtoi = function(s) {
    let i = 0;
    let sign = 1;
    let res = 0;
    let len = s.length;
    let INT_MAX = 2147483647;
    let INT_MIN = - INT_MAX - 1;
  
    // skip all space
    while (s[i] === ' ') i++;
  
    // check sign
    if (s[i] === '+' || s[i] === '-') {
      sign = s[i] === '+' ? 1 : -1;
      i++;
    }
  
    while (s[i] >= '0' && s[i] <= '9') {
      res = (res * 10) + (s[i] - 0);
      if (sign === 1 && res > INT_MAX) return INT_MAX;
      if (sign === -1 && res > INT_MAX + 1) return INT_MIN;
      i++;
    }
  
    return res * sign;
  };