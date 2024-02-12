const bestSum = (targetSum, numbers) => {
	const table = new Array(targetSum + 1).fill(null)
	table[0] = []

	for (let i = 0; i <= targetSum; i++) {
		for (let n of numbers) {
			if (table[i] !== null) {
				// alvins, approach
				// const combination = [...table[i], n]
				// if (!table[i + n] || combination.length < table[i + n].length) {
				// 	table[i + n] = combination
				// }

				// my approach
				if (table[i + n] !== null && table[i + n] !== undefined) {
					if ([...table[i], n].length < table[i + n].length) {
						table[i + n] = [...table[i], n]
					}
				} else {
					table[i + n] = [...table[i], n]
				}
			}
		}
	}

	// console.log(table)
	return table[targetSum]
}

console.log(bestSum(7, [5, 3, 4, 7])) //[7]
console.log(bestSum(8, [2, 3, 5])) //[3, 5]
console.log(bestSum(8, [1, 4, 5])) //[4, 4]
console.log(bestSum(100, [1, 2, 5, 25])) //[25, 25, 25, 25]
