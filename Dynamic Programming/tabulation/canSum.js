const canSum = (targetSum, numbers) => {
	const table = new Array(targetSum + 1).fill(false)

	table[0] = true
	for (let i = 0; i < targetSum; i++) {
		for (let n of numbers) {
			if (table[i] === true) {
				table[i + n] = true
			}
		}
	}

	console.log(table.length)
	return table[targetSum]
}

//  0 + 2 = 2
//  0 + 3 = 3
//  0 + 6 = 6

// 2 + 2 = 4
// 2 + 3 = 5
// 2 + 6 = 8

// 3 + 2 = 5
// 3 + 3 = 6
// 3 + 6 = 9

console.log(canSum(6, [2, 3, 6]))
