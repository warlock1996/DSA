const canConstruct = (target, wordBank) => {
	const table = new Array(target.length + 1).fill(false)
	// for string of length 0, its always possible (i.e dont take any values from the array [])
	table[0] = true

	for (let i = 0; i <= target.length; i++) {
		if (table[i] === true) {
			for (let word of wordBank) {
				if (target.slice(i, i + word.length) === word) {
					table[i + word.length] = true
				}
			}
		}
	}

	return table[target.length]
}

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // true
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])) // false
