// You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Link: https://leetcode.com/problems/climbing-stairs/

// Solution 1

// Time Complexity: O(N)

// Space Complexity: O(1)

const climbStairs = n => {
    if (n === 1) {
        return n;
    }

    let first = 1;
    let second = 2;

    for (let i = 3; i <= n; i++) {
        const third = first + second;
        first = second;
        second = third
    }

    return second;
};

// Solution 2

// Time Complexity: O(N)

// Space Complexity: O(N)

function climbStairs(n) {
    if (n <= 3) return n;

    let ways = [0, 1, 2, 3]

    for (let i = 4; i <= n; i++) {
        ways.push(ways[i -1] + ways[i - 2]);
    }

    return ways.pop()
}

module.exports = climbStairs;
