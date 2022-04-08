/* Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees. */

// Link: https://leetcode.com/problems/validate-binary-search-tree/

// Time Complexity:

// Space Complexity:

const isValidBST = root => {    
    let results = []; 
   
    const traverse = tree =>{
     if(!tree) return null 
     if(tree.left) traverse(tree.left)
     results.push(tree.val)
     if(tree.right) traverse(tree.right)
    }
    traverse(root)
   
    for(let i = 0; i < results.length; i++){
       if(results[i] >= results[i + 1]) return false
    }
   return true
   
   };

module.exports = isValidBST;
