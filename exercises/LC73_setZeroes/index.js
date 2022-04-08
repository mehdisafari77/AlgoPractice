/* Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place. */

// Link: https://leetcode.com/problems/set-matrix-zeroes/

// Time Complexity: O(n)

// Space Complexity: O(n)

var setZeroes = function(matrix) {
    let rowHasZero = [];
    let colHasZero = [];
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                rowHasZero.push(i);
                colHasZero.push(j);
            }
        }
    }
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (rowHasZero.includes(i) || colHasZero.includes(j)) {
                matrix[i][j] = 0;
            }
        }
    }
};

module.exports = setZeroes;
