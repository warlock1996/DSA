/*
        f
       / \
      g -- i --- j
     /      \
    h        k
 
 */

// adjancency map/list
const graph = {
	f: ['g', 'i'],
	g: ['h'],
	h: [],
	i: ['g', 'k'],
	j: ['i'],
	k: [],
}

function hasPath(graph, src, dest) {
	if (src === dest) return true
	else {
		const stack = [src]
		let result = false
		while (stack.length > 0) {
			const current = stack.pop()
			if (current === dest) result = true
			for (const node of graph[current]) {
				stack.push(node)
			}
		}
		return result
	}
}

function hasPathRecursive(graph, src, dest) {
	// dfs
	if (src === dest) return true
	for (const node of graph[src]) {
		if (hasPathRecursive(graph, node, dest) === true) {
			return true
		}
	}
	return false
}

function hasPathBFS(graph, src, dest) {
	const queue = [src]
	const result = []
	while (queue.length > 0) {
		const current = queue.shift()
		result.push(current)
		if (current === dest) return { result, path: true }
		for (const node of graph[current]) {
			queue.push(node)
		}
	}
	return { result, path: false }
}

const result = hasPathBFS(graph, 'f', 'i')
console.log(result)
