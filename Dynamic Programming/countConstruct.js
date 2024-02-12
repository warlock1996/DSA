const countConstruct = (target, wordBank, memo = {}) => {
	if (target in memo) return memo[target]
	if (target.length === 0) return 1

	let totalWays = 0
	for (let word of wordBank) {
		if (target.indexOf(word) === 0) {
			const remainder = target.slice(word.length)
			const remainderResult = countConstruct(remainder, wordBank, memo)
			memo[target] = remainderResult
			totalWays += remainderResult
		}
	}

	memo[target] = totalWays
	return totalWays
}

console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))
console.log(countConstruct('purple', ['pur', 'ple', 'p', 'le', 'purp']))
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeee', ['e', 'ee', 'eee', 'eeee', 'eeeee']))
