/* Given the root of a binary tree, invert the tree, and return its root. */

// Link: https://leetcode.com/problems/invert-binary-tree/

// Time Complexity: O(n)

// Space Complexity: O(n)

var levelOrder = function(root) {
    if(!root) return []
    const queue = []
    const output = []
    queue.push(root)
    while(queue.length) {
        // Remove all the current nodes in the queue and add each node's children to the queue
        const len = queue.length
        const row = []
        for(let i = 0; i < len; i++) {
            const cur = queue.shift()
            if(cur.left) queue.push(cur.left)
            if(cur.right) queue.push(cur.right)
            // Push the current node val to the row array
            row.push(cur.val)
        }
        // Push the current row array into the output array
        output.push(row)
    }
    return output
};

module.exports = levelOrder;
