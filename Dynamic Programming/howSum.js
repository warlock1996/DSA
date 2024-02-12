const howSum = (targetSum, numbers, memo = {}) => {
	if (targetSum in memo) return memo[targetSum]
	if (targetSum === 0) return []
	if (targetSum < 0) return null

	for (let num of numbers) {
		const rem = targetSum - num
		const res = howSum(rem, numbers, memo)
		if (res !== null) {
			const result = [num, ...res]
			memo[targetSum] = result
			return result
		}
	}

	memo[targetSum] = null
	return null
}

console.log(howSum(7, [4, 3, 7, 2, 5])) //  [4, 3]
console.log(howSum(7, [6, 5])) // null
console.log(howSum(7, [1, 6, 5])) // [1, 1, 1, 1, 1, 1]
console.log(howSum(300, [1, 14])) // [1, 1, 1, 1, 1, 1]
