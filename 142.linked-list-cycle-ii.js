/*
 * @lc app=leetcode id=142 lang=javascript
 *
 * [142] Linked List Cycle II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {

	let slow = head;
	let fast = head;

	while (fast && fast.next) {
		fast = fast.next.next
		slow = slow.next
		if (slow === fast) {
			slow = head;
			while (slow !== fast) {
				fast = fast.next;
				slow = slow.next;
			}
			return slow;
		}
	}
	return null;
};
// @lc code=end

