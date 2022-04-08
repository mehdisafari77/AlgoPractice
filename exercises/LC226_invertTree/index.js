/* Given the root of a binary tree, invert the tree, and return its root. */

// Link: https://leetcode.com/problems/invert-binary-tree/

// Time Complexity: O(n)

// Space Complexity: O(n)

// DFS approach
// In the recursion, you will traverse the tree until you hit to the bottom most leaf node
// The the right and left children of the current node will switch sides
// From the bottom going up, the ancestor nodes will switch their right and left child
// When we reach the root node, the tree will have been inverted
var invertTree = function(root) {
    // Stop when we reach a null value
    if(!root) return null;
    // Traverse the left side of the tree down to the leaf node
    const left = invertTree(root.left)
    // Traverse the right side of the tree down to the leaf node
    const right = invertTree(root.right)
    // Switch the placement of the children
    root.left = right
    root.right = left
    // Return the current node
    return root
};

module.exports = invertTree;
