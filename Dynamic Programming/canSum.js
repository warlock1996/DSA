const canSum = (targetSum, numbers, memo = {}) => {
	if (targetSum in memo) return memo[targetSum]
	if (targetSum === 0) return true
	if (targetSum < 0) return null

	for (let num of numbers) {
		const rem = targetSum - num
		const res = canSum(rem, numbers, memo)
		if (res === true) {
			memo[targetSum] = true
			return true
		}
	}

	memo[targetSum] = false
	return false
}

console.log(canSum(7, [4, 3, 7, 2, 5])) //  true
console.log(canSum(7, [6, 5])) //false
console.log(canSum(300, [7, 14])) //false
