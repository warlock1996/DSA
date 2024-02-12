const allConstruct = (target, wordBank, memo = {}) => {
	if (target in memo) return memo[target]
	if (target.length === 0) return [[]]

	let allPairs = []
	for (let word of wordBank) {
		if (target.indexOf(word) === 0) {
			const suffix = target.slice(word.length)
			let suffixResult = allConstruct(suffix, wordBank, memo)
			memo[target] = suffixResult
			if (suffixResult !== null) {
				suffixResult = suffixResult.map((s) => [word, ...s])
				allPairs.push(...suffixResult)
			}
		}
	}

	return allPairs
}

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl', 'ple']))
console.log(allConstruct('aaaaaaaaaaaa', ['a', 'aa', 'aaa', 'aaaaa', 'aaaaaa']))
