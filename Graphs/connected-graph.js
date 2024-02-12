const graph = {
	1: ['2'],
	2: [],
	3: [],
	4: ['5', '6', '7', '8'],
	5: ['4', '6', '7', '8'],
	6: ['4', '5', '7', '8'],
	7: ['4', '5', '6', '8'],
	8: ['4', '5', '6', '7'],

	// 0: [8, 1, 5],
	// 1: [0],
	// 5: [0, 8],
	// 8: [0, 5],
	// 2: [3, 4],
	// 3: [2, 4],
	// 4: [3, 2],

	// 1: [2],
	// 2: [1, 8],
	// 6: [7],
	// 9: [8],
	// 7: [6, 8],
	// 8: [9, 7, 2],
}

function connectedComponents(graph, visited) {
	let count = 0
	for (const key in graph) {
		console.log(visited, key)
		if (!visited.has(Number(key))) {
			if (graph[key].length > 0) {
				const stack = [graph[key][0]]
				while (stack.length > 0) {
					const current = stack.pop()
					for (const neighbor of graph[current]) {
						if (!visited.has(Number(neighbor))) {
							stack.unshift(neighbor)
						}
					}
					visited.add(current)
				}
			}
			count++
		}
	}
	console.log(count)
}

function connectedComponentsRecursive(graph) {
	let count = 0
	const visited = new Set()
	for (const key in graph) {
		if (dfs(graph, key, visited) === true) {
			count++
		}
	}
	return count
}

function dfs(graph, src, visited) {
	if (visited.has(String(src))) return false
	visited.add(String(src))
	for (const node of graph[src]) {
		dfs(graph, node, visited)
	}
	return true
}

const result = connectedComponentsRecursive(graph)
console.log(result)
