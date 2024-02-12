const howSum = (targetSum, numbers) => {
	const table = new Array(targetSum + 1).fill(null)
	// i know that to make 0 i need [] so
	table[0] = []
	for (let i = 0; i <= targetSum; i++) {
		for (let num of numbers) {
			if (table[i] !== null) {
				table[i + num] = [...table[i], num]
			}
		}
	}
	console.log(table)
	return table[targetSum]
}

console.log(howSum(7, [5, 3, 4]))
