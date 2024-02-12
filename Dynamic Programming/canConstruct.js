const canConstruct = (target, wordBank, memo = {}) => {
	if (target in memo) return memo[target]
	if (target.length === 0) return true

	for (let word of wordBank) {
		if (target.indexOf(word) === 0) {
			const remainder = target.slice(word.length)
			const remainderResult = canConstruct(remainder, wordBank, memo)
			memo[target] = remainderResult
			if (remainderResult === true) return true
		}
	}

	memo[target] = false
	return false
}

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee']))
