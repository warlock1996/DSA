const findSpecialIntger = (nums) => {
	// base case
	if (nums.length === 1 && nums[0] === 0) return 0
	if (nums.length === 1) return 1

	const map = {}
	for (let i = 0; i < nums.length; i++) {
		for (let num of nums) {
			if (num >= i) {
				if (i in map) {
					map[i] += 1
					continue
				}
				map[i] = 1
			}
		}
		if (i === map[i]) {
			return map[i]
		}
	}

	return -1
}

console.log(findSpecialIntger([0, 4, 1, 0, 4])) // 2
console.log(findSpecialIntger([0, 1, 1, 0, 4, 5, 6])) // 3
console.log(findSpecialIntger([0])) // 3
