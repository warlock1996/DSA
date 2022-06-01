//               a (11)
//              / \
//        (23) b    c (15)
//            / \     \
//     (13)  d   e(47) f (2)
//          /
//         h (10)

// DFS = a, b, d, e, c, f

class Node {
	constructor(val) {
		this.val = val
		this.left = null
		this.right = null
	}
}

const a = new Node(11)
const b = new Node(23)
const c = new Node(15)
const d = new Node(13)
const e = new Node(47)
const f = new Node(2)
const h = new Node(10)

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f
d.left = h

// stack version
function depthFirstSearch(root) {
	if (root === null) return []
	const stack = [root]
	const result = []
	while (stack.length > 0) {
		const cur = stack[stack.length - 1]
		const popped = stack.pop()
		result.push(popped.val)

		if (cur.right) {
			stack.push(cur.right)
		}
		if (cur.left) {
			stack.push(cur.left)
		}
	}
	return result
}

// recursive version
function depthFirstSearchRecursive(root) {
	if (root.val === null) return []
	let leftVals = [],
		rightVals = []
	if (root.left) leftVals = depthFirstSearchRecursive(root.left)
	if (root.right) rightVals = depthFirstSearchRecursive(root.right)
	return [root.val, ...leftVals, ...rightVals]
}

// recursive version
function maxPathSumRecursive(root) {
	if (root === null) return 0
	if (root.left === null && root.right === null) return root.val
	const sum = Math.max(maxPathSumRecursive(root.left), maxPathSumRecursive(root.right))
	return root.val + sum
}

console.log(maxPathSumRecursive(a))
