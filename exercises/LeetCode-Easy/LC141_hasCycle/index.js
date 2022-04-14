/* Given the head of a singly linked list, reverse the list, and return the reversed list. */

// Link: https://leetcode.com/problems/reverse-linked-list/

// Time Complexity: O(N)

// Space Complexity: O(1)

var hasCycle = function(head) {
    var slow = head;
    var fast = head;
    while (slow && fast) {
      slow = slow.next;
      fast = fast.next ? fast.next.next : undefined;
      if (slow === fast) return true;
    }
    return false;
  };

module.exports = hasCycle;
