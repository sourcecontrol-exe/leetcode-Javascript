/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {

	const last = digits.length - 1;
	digits[last]++;
	for (let i = last; i > 0 && digits[i] === 10; i--) {
		digits[i] = 0;
		digits[i - 1]++;
	}
	if (digits[0] === 10) {
		digits[0] = 0;
		digits.unshift(1);
	}
	return digits;

}
// console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]))
// @lc code=end

