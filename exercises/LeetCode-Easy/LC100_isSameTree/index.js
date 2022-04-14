/* Given two binary trees, write a function to check whether they are the same.

Two trees are considered identical if they are structurally identical and nodes have the same value. */

// Link: https://leetcode.com/problems/same-tree/

// Time Complexity: O(n)

// Space Complexity: O(n)

var isSameTree = function(p, q) {
    if (p === null && q === null) {
    return true;
  } else if (p === null || q === null) {
    return false;
  }
  if (p.val === q.val) {
    let leftSame = isSameTree(p.left, q.left);
    let rightSame = isSameTree(p.right, q.right);
    return leftSame && rightSame;
  }
  return false;
};

module.exports = isSameTree;
