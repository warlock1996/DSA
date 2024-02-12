const edges = [
	['a', 'c'],
	['a', 'b'],
	['c', 'b'],
	['c', 'd'],
	['b', 'd'],
	['e', 'd'],
	['g', 'f'],
]

const buildGraph = (edges) => {
	let graph = {}
	for (const [nodea, nodeb] of edges) {
		if (graph[nodea]) {
			graph[nodea] = [...graph[nodea], nodeb]
		} else {
			graph[nodea] = [nodeb]
		}
		if (graph[nodeb]) {
			graph[nodeb] = [...graph[nodeb], nodea]
		} else {
			graph[nodeb] = [nodea]
		}
	}
	return graph
}

function shortestPath(edges, nodeA, nodeB) {
	const graph = buildGraph(edges)
	console.log(graph)
	// return
	// breadth first search which will also count the no of edges
	const shortestDist = BFS(graph, nodeA, nodeB)
	console.log(shortestDist)
	return shortestDist
}

function BFS(graph, nodeA, nodeB) {
	if (nodeA === nodeB) return 1
	const visited = new Set()
	const queue = [{ node: nodeA, dist: 0 }]
	while (queue.length > 0) {
		const current = queue.shift()
		visited.add(current.node)
		if (current.node === nodeB) {
			return current.dist
		}
		for (const neighbor of graph[current.node]) {
			if (!visited.has(neighbor)) {
				queue.push({ node: neighbor, dist: current.dist + 1 })
			}
		}
	}
	return -1
}

shortestPath(edges, 'b', 'g')
