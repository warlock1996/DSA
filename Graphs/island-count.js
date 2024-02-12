const islandCount = (grid) => {
	const visited = new Set()
	let currentMin = Infinity
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			const current = grid[i][j]
			// console.log(current)
			if (current !== 'W') {
				const result = dfs(i, j, grid, visited)
				// console.log(result)
				if (result) {
					// console.log(result)
					currentMin = Math.min(currentMin, result)
				}
			}
		}
	}
	console.log(currentMin)
	return currentMin
}

const dfs = (i, j, grid, visited) => {
	const rowInBounds = i >= 0 && i < grid.length
	const colInBounds = j >= 0 && j < grid[0].length

	if (!rowInBounds || !colInBounds) return 0

	const pos = i + ', ' + j

	if (visited.has(pos)) return 0
	visited.add(pos)
	let size = 1

	if (grid[i][j] === 'W') return 0

	size += dfs(i + 1, j, grid, visited)
	size += dfs(i - 1, j, grid, visited)
	size += dfs(i, j + 1, grid, visited)
	size += dfs(i, j - 1, grid, visited)

	return size
}

const grid = [
	['W', 'L', 'W', 'W', 'W'],
	['W', 'L', 'W', 'W', 'W'],
	['W', 'W', 'W', 'L', 'W'],
	['W', 'W', 'L', 'L', 'W'],
	['L', 'W', 'W', 'L', 'L'],
	['L', 'L', 'W', 'W', 'W'],
]

islandCount(grid)
