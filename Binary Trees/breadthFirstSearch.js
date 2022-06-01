//               a
//              / \
//             b   c
//            / \   \
//           d  e(x) f
//          /
//         h(x)

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
const c = new Node(-5)
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

function breadthFirstSearch(root) {
	if (root === undefined) return []
	const result = []
	const queue = [root]
	while (queue.length > 0) {
		const cur = queue.shift()
		result.push(cur.val)
		if (cur.left) {
			queue.push(cur.left)
		}
		if (cur.right) {
			queue.push(cur.right)
		}
	}
	return result
}

// no straight forward recursive solution for breadfirst search
// so always stick with the iterative approach

function findInTree(root, x) {
	if (root === undefined) return []
	let result = undefined
	const queue = [root]
	while (queue.length > 0) {
		const cur = queue.shift()
		console.log(cur.val, x.val)
		if (cur.val === x.val) {
			result = x.val + ' is found'
			return result
		}
		if (cur.left) {
			queue.push(cur.left)
		}
		if (cur.right) {
			queue.push(cur.right)
		}
	}
	return 'not found !'
}

function treeSum(root) {
	if (root === null) return []
	let result = 0
	const queue = [root]
	while (queue.length > 0) {
		const cur = queue.shift()
		result += cur.val
		if (cur.left) {
			queue.push(cur.left)
		}
		if (cur.right) {
			queue.push(cur.right)
		}
	}
	return result
}

function findMinVal(root) {
	let min = Infinity
	if (root === null) return []
	const queue = [root]
	while (queue.length > 0) {
		const cur = queue.shift()
		if (min > cur.val) {
			min = cur.val
		}
		if (cur.left) {
			queue.push(cur.left)
		}
		if (cur.right) {
			queue.push(cur.right)
		}
	}
	return min
}

console.log(findMinVal(a))
