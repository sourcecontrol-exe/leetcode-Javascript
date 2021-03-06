/*
 * @lc app=leetcode id=162 lang=javascript
 *
 * [162] Find Peak Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
   
	let left = 0, right = nums.length-1;

	while(left<right){
		let mid = left+Math.floor((right-left)/2);
		if(nums[mid] > nums[mid+1]) right = mid
		else left= mid+1
	}
	return left
};
// console.log(findPeakElement([1,2,3,1]))
// @lc code=end

