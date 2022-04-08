/* Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”  */

// Link: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

// Time Complexity:

// Space Complexity:

var lowestCommonAncestor = function(root, p, q) {
    if (root == null || [p.val, q.val].includes(root.val)) {
        return root;
    }
    
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right,p ,q);
    
    if (left && right) {
        return root;
    } 
    
    return left ? left : right;
};
module.exports = lowestCommonAncestor;
