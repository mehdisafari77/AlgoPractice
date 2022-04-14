/* You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1. You may assume that you have an infinite number of each kind of coin. */


// Link: https://leetcode.com/problems/coin-change/

// Time Complexity: O(A * C) A = amount and C = # of coins

// Space Complexity: O(A)

function coinChange(coins, amount) {
    let dpMinCoins = new Array(amount + 1).fill(Infinity);
    dpMinCoins[0] = 0;

    for (let i = 1; i < dpMinCoins.length; i++) {
        for (let j = 0; j < coins.length; j++) {
            const coinValue = coins[j];
            if (coinValue <= i) {
                dpMinCoins[i] = Math.min(dpMinCoins[i - coinValue] + 1, dpMinCoins[i])
            }
        }
    }

    const answer = dpMinCoins[dpMinCoins.length - 1];
    return answer === Infinity ? -1 : answer;
}

module.exports = coinChange;
