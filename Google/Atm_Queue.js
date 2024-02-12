const solution = (people, amounts, limit) => {
	const queue = new Array(people).fill().map((v, i) => i + 1)
	const result = []

	while (queue.length) {
		const current = queue.shift()
		amounts[current - 1] -= limit
		if (amounts[current - 1] > 0) {
			queue.push(current)
		} else {
			result.push(current)
		}
	}

	return result
}

console.log(solution(3, [2, 7, 4], 3))
console.log(solution(5, [9, 10, 4, 7], 6))
