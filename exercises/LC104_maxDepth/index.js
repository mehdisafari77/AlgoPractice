/* Given the root of a binary tree, invert the tree, and return its root. */

// Link: https://leetcode.com/problems/invert-binary-tree/

// Time Complexity: O(n)

// Space Complexity: O(n)

var maxDepth = function(root) {
    if(!root) return null;
    let max = Math.max(maxDepth(root.left), maxDepth(root.right));
    return max + 1;
}

module.exports = maxDepth;
