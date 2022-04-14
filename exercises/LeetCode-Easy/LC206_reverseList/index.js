/* Given the head of a singly linked list, reverse the list, and return the reversed list. */

// Link: https://leetcode.com/problems/reverse-linked-list/

// Time Complexity: O(N)

// Space Complexity: O(1)

// recursive
var reverseList = function(head) {
    if (head === null) return null;
    if (head.next === null) return head;
    
    var newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    
    return newHead;
    
};
// non-recursive
var reverseList = function(head) {
    if (head === null) return null;
    if (head.next === null) return head;
    
    
    
    var prev = head;
    var cur = head.next;
      
    prev.next = null;
    while (cur !== null) {
        var next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    
    return prev;
    
};

module.exports = reverseList;
