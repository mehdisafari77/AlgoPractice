/* Given the head of a singly linked list, reverse the list, and return the reversed list. */

// Link: https://leetcode.com/problems/merge-two-sorted-lists/

// Solution 1: While Loop

// Time Complexity: 

// Space Complexity: 

var mergeTwoLists = function (l1, l2) {
    // Initialise a new LinkedList with a dummy ListNode
    let newList = new ListNode(0);

    // Maintain a reference to the head of the new LinkedList
    let headOfNewList = newList;

    // Whilst both of the passed in lists contain more elements
    while (l1 != null && l2 != null) {
        // If l1's value is smaller
        if (l1.val < l2.val) {
            // Add l1's value to the new list
            newList.next = l1;

            // Move l1 to its next element
            l1 = l1.next;
        } else {
            // Add l2's value to the new list
            newList.next = l2;

            // Move l2 to its next element
            l2 = l2.next;
        }

        // Move into the next level of the LinkedList for the next iteration
        newList = newList.next;
    }

    // If l1 has run out of elements
    if (l1 == null) {
        // Append l2 to the new list
        newList.next = l2;
    }
    // If l2 has run out of elements
    else {
        // Append l1 to the new list
        newList.next = l1;
    }

    return headOfNewList.next;
};


// Solution 2: Recursion

// Time Complexity: 

// Space Complexity: 

var mergeTwoLists = function (l1, l2) {
    // If either list is empty, return the other list's node
    if (l1 == null) return l2;
    if (l2 == null) return l1;

    // If l1 is lower
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }
    // If l2 is lower
    else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};

module.exports = mergeTwoLists;
