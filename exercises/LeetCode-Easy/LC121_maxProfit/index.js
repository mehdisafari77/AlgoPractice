/* You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0. */

// Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// Time Complexity: O(n)

// Space Complexity: O(1)

var maxProfit = function(prices) {
    let maxProfit = 0;
    let cheapestPrice = prices [0];

    for (let i = 0; i < prices. length; i++) {
        const price = prices [i];

    if (price < cheapestPrice) cheapestPrice = price;

    const currentProfit = price - cheapestPrice;
    maxProfit = Math.max(currentProfit, maxProfit);
    }
    return maxProfit
}
    
module. exports = maxProfit;
