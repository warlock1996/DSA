const edgeList = [
	['i', 'j'],
	['k', 'i'],
	['m', 'k'],
	['k', 'l'],
	['o', 'n'],
]

let graph = {}
for (const [nodea, nodeb] of edgeList) {
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

graph = {
	i: ['j', 'k'],
	j: ['i'],
	k: ['i', 'm', 'l'],
	m: ['k'],
	l: ['k'],
	o: ['n'],
	n: ['o'],
}

function depthFirstSearch(graph, src, dest, visited) {
	if (src === dest) return true
	if (visited.has(src)) return false

	const stack = [src]
	const result = []
	while (stack.length > 0) {
		const current = stack.pop()
		visited.add(current)
		result.push(current)
		if (current === dest) return { result, path: true }
		for (const neighbor of graph[current]) {
			if (!visited.has(neighbor)) {
				stack.push(neighbor)
			}
		}
	}
	console.log(result)
	return { result, path: false }
}

function hasPath(graph, src, dest, visited) {
	if (src === dest) return true
	if (visited.has(src)) return false
	visited.add(src)

	for (const node of graph[src]) {
		if (hasPath(graph, node, dest, visited) === true) {
			return true
		}
	}

	return false
}

const result = hasPath(graph, 'i', 'o', new Set())
console.log(result)
