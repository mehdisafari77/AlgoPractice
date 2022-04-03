/* There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 109. */


// Link: https://leetcode.com/problems/unique-paths/

// Time Complexity: O(N * M)

// Space Complexity: O(N * M)


function uniquePaths(m, n) {
    const dpMatrix = [];

    for (let row = 1; row <= n; row++) {
        dpMatrix.push([]);
    }

    for (let row = 0; row < n; row++) {
        dpMatrix[row][0] = 1;
    }

    for (let col = 0; col < m; col++) {
        dpMatrix[0][col] = 1;
    }

    for (let row = 1; row < n; row++) {
        for (let col = 1; col < m; col++) {
            dpMatrix[row][col] = dpMatrix[row][col - 1] + dpMatrix[row - 1][col]
        }
    }
    return dpMatrix[dpMatrix.length -1][m -1]
}

module.exports = uniquePaths;
