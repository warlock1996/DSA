// breath first traversal

// adjancency map/list
const graph = {
	a: ['b', 'c'],
	b: ['d'],
	c: ['e'],
	d: ['f'],
	e: [],
	f: [],
}

function BFS(graph, source) {
	const queue = [source]
	const result = []
	while (queue.length > 0) {
		const cur = queue.shift()
		result.push(cur)
		for (const node of graph[cur]) {
			queue.push(node)
		}
	}
	console.log(result)
}

BFS(graph, 'a')
