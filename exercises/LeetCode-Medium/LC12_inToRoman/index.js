/* Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral. */

// Link: https://leetcode.com/problems/integer-to-roman/

// Solution 1
const numerals = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

var intToRoman = function (num) {
    if (num < 1) return '';
    if (num >= 1000) return 'M' + intToRoman(num - 1000);
    if (num >= 900) return 'CM' + intToRoman(num - 900);
    if (num >= 500) return 'D' + intToRoman(num - 500);
    if (num >= 400) return 'CD' + intToRoman(num - 400);
    if (num >= 100) return 'C' + intToRoman(num - 100);
    if (num >= 90) return 'XC' + intToRoman(num - 90);
    if (num >= 50) return 'L' + intToRoman(num - 50);
    if (num >= 40) return 'XL' + intToRoman(num - 40);
    if (num >= 10) return 'X' + intToRoman(num - 10);
    if (num >= 9) return 'IX' + intToRoman(num - 9);
    if (num >= 5) return 'V' + intToRoman(num - 5);
    if (num >= 4) return 'IV' + intToRoman(num - 4);
    if (num >= 1) return 'I' + intToRoman(num - 1);
    return num;
};

// Solution 2
var intToRoman = function (num) {
    const list = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
    const valueList = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let result = '';

    // Run until we have converted the full number
    while (num !== 0) {
        // Loop though the available numerals
        for (let i = 0; i < list.length; i++) {
            // Check if the outstanding number is greater than the current numeral
            if (num >= valueList[i]) {
                // If so, add this numeral to the result and subtract its value from the outstanding number
                result += list[i];
                num -= valueList[i];
                break;
            }
        }
    }
    return result;
};

// Solution 3
var intToRoman = function (num) {
    const M = ['', 'M', 'MM', 'MMM'];
    const C = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    const X = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    const I = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

    return (
        M[Math.floor(num / 1000)] +
        C[Math.floor((num % 1000) / 100)] +
        X[Math.floor((num % 100) / 10)] +
        I[num % 10]
    );
};