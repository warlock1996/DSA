const graph = {
	0: ['8', '1', '5'],
	1: ['0'],
	5: ['0', '8'],
	8: ['0', '5'],
	2: ['3', '4'],
	3: ['2', '4'],
	4: ['3', '2'],
}

function findLargestComponent(graph) {
	const visited = new Set()
	let largest = -Infinity
	for (const key in graph) {
		const result = dfs(graph, key, visited)
		largest = Math.max(result, largest)
	}
	return largest
}

function dfs(graph, src, visited) {
	let count = 0
	if (visited.has(src)) return count
	visited.add(src)
	count++
	for (const neighbor of graph[src]) {
		count += dfs(graph, neighbor, visited)
	}
	return count
}

const result = findLargestComponent(graph)
console.log(result)
