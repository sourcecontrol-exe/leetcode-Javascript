/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
	if(!root) return 0;

	let min = Number.MAX_SAFE_INTEGER;
	function helper(root, depth=0) {
	
		if(!root) return
		if(!root.left   && !root.right) {
			min = Math.min(min, depth+1);
			return;
		}
		helper(root.left, depth+1);
		helper(root.right, depth+1);
		
	}
	helper(root);
	return min;

};
// @lc code=end

