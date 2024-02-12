// function calcBinary(x) {
// 	if (x === 0 || x === 1) return x
// 	let res = ''
// 	while (x > 0) {
// 		res = `${x % 2}${res}`
// 		x = Math.floor(x / 2)
// 	}
// 	return res
// }

// calcBinary(0)
// calcBinary(1)

// function toDecimal(binary) {
// 	binary = binary.split('').reverse()
// 	let i = 0,
// 		sum = 0
// 	while (i < binary.length) {
// 		sum += binary[i] * Math.pow(2, i)
// 		i++
// 	}
// 	console.log(sum)
// 	return sum
// }

// toDecimal('11001')
function largestComponent(graph) {
	const visited = new Set()
	let max = -Infinity
	for (let key in graph) {
		max = Math.max(max, dfs(graph, key, visited, 0))
	}
	console.log(max)
	return max
}

function dfs(graph, src, visited, count) {
	if (visited.has(src)) return false
	visited.add(src)
	count += 1
	for (let neighbor of graph[src]) {
		if (dfs(graph, neighbor, visited, count) === true) return count
	}

	return true
}

largestComponent({
	0: ['8', '1', '5'],
	1: ['0'],
	5: ['0', '8'],
	8: ['0', '5'],
	2: ['3', '4'],
	3: ['2', '4'],
	4: ['3', '2'],
}) // -> 4
