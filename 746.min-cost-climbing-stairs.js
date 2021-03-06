/*
 * @lc app=leetcode id=746 lang=javascript
 *
 * [746] Min Cost Climbing Stairs
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {

	if (cost.length < 3) return Math.min(...cost);

	

	for (let i = 2; i < cost.length ; i++){
		cost[i]+=Math.min(cost[i-2], cost[i-1]);
	}
	return Math.min(cost[cost.length-1], cost[cost.length-2]);
};
// @lc code=end
