const allConstuct = (target, wordBank) => {
	const table = new Array(target.length + 1).fill().map(() => [])
	table[0] = [[]]
	// console.log(table)
	for (let i = 0; i <= target.length; i++) {
		for (let word of wordBank) {
			if (target.slice(i, i + word.length) === word) {
				const combination = table[i].map((el) => [...el, word])
				table[i + word.length].push(...combination)
			}
		}
	}
	// console.log(table)
	return table[target.length]
}

console.log(allConstuct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
console.log(allConstuct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'])) // true
