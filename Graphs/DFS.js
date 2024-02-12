// depth first traversal

// adjancency map/list
const graph = {
	a: ['b', 'c'],
	b: ['d'],
	c: ['e'],
	d: ['f'],
	e: [],
	f: [],
}

// function DFS(graph, root) {
// 	let stack = [root]
// 	const result = []
// 	while (stack.length > 0) {
// 		const cur = stack.pop()
// 		if (graph[cur].length) {
// 			stack = [...stack, ...graph[cur].reverse()]
// 		}
// 		result.push(cur)
// 	}
// 	console.log(result)
// }

// DFS(graph, 'a')

function DFSR(root) {
	if (graph[root].length === 0) {
		return [root]
	}
	let result = []
	for (const val of graph[root]) {
		result = [...result, ...DFSR(val)]
	}
	return [root, ...result]
}

const result = DFSR('a')
console.log(result)
