/* Given the head of a linked list, remove the nth node from the end of the list and return its head. */

// Link: https://leetcode.com/problems/remove-nth-node-from-end-of-list/


// Solution 1: Double Loop

// Time Complexity: O(N)

// Space Complexity: O(1)

var removeNthFromEnd = function (head, n) {
    // Create a new LinkedList with a dummy first entry that copies the original LinkedList
    let newLinkedList = new ListNode(0);
    newLinkedList.next = head;

    // Initialise variables used to calculate the size of and traverse the original LinkedList
    let linkedListTraverser = head;
    let size = 0;

    // Traverse the LinkedList to establish its size
    while (linkedListTraverser != null) {
        linkedListTraverser = linkedListTraverser.next;
        size++;
    }

    // Reset the instance of the original LinkedList used for traversing
    linkedListTraverser = newLinkedList;

    // Traverse the list again till we reach the element before the one that needs to be removed
    for (let i = 0; i < size - n; i++) {
        linkedListTraverser = linkedListTraverser.next;
    }

    // Remove the target element
    linkedListTraverser.next = linkedListTraverser.next.next;

    // Return the copy of the original list node, minus the initial dummy node and the node that was removed
    return newLinkedList.next;
};

// Solution 1: Single Loop

// Time Complexity: O(N)

// Space Complexity: O(1)
var removeNthFromEnd = function (head, n) {
    // Create a new LinkedList with a dummy first entry that copies the original LinkedList
    let newLinkedList = new ListNode(0);
    newLinkedList.next = head;

    // Initialise fast and slow pointers
    let fastPointer = newLinkedList;
    let slowPointer = newLinkedList;

    // Move the fast pointer up by n + 1 (+ 1 is to account for the dummy node)
    for (let i = 1; i <= n + 1; i++) {
        fastPointer = fastPointer.next;
    }

    // Move the fast and slow pointers fowards, until the fast pointer reaches the end
    // This indicates that the slow pointer has reached (end - n - 1) AKA the next node is the target node
    while (fastPointer != null) {
        fastPointer = fastPointer.next;
        slowPointer = slowPointer.next;
    }

    // Move the slow pointer's next value on by 1 (effectively skipping / removing the target node)
    slowPointer.next = slowPointer.next.next;

    // Return the copy of the original list node, minus the initial dummy node and the node that was removed
    return newLinkedList.next;
};

module.exports = removeNthFromEnd;
