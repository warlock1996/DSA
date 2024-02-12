const countConstruct = (target, wordBank) => {
	const table = new Array(target.length + 1).fill(0)
	// there is exactly one way we could generate string of length 0
	table[0] = 1

	for (let i = 0; i <= target.length; i++) {
		if (table[i] !== 0) {
			for (let word of wordBank) {
				if (target.slice(i, i + word.length) === word) {
					table[i + word.length] += table[i]
				}
			}
		}
	}
	console.log(table)
	return table[target.length]
}

console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
