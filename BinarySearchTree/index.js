class Node {
	constructor(val) {
		this.val = val
		this.left = null
		this.right = null
	}
}

const input = [15, 25, 10, 7, 22, 17, 13, 5, 9, 27, 30]
//				0,  1,  2, 3,  4,  5,  6, 7, 8,  9, 10
//                   15
//                 /    \
//               10      25
//              / \     /  \
//             7  13   22   27
//            / \     /      \
//           5   9   17    	  30

/* 		rough work
callstack: (15, 17), (25, 17), (22, 17), (17, 17)
*/

class BinarySearchTree {
	constructor(values = []) {
		this.values = this.constructBinarySearchTree(values)
		this.root = this.values[0]
		// which is essentially an array under the hood
	}
	constructBinarySearchTree(values) {
		const nodes = this.createNodes(values)
		let root = nodes[0]
		for (let i = 1; i < nodes.length; i++) {
			this.insertNode(root, nodes[i])
		}
		// console.log(nodes)
		return nodes
	}
	createNodes(values) {
		const nodesArray = []
		for (let i = 0; i < values.length; i++) {
			nodesArray.push(new Node(values[i]))
		}
		return nodesArray
	}
	insertNode(root, node) {
		if (root === null) return true

		if (root.val < node.val) {
			if (this.insertNode(root.right, node)) {
				root.right = node
			}
		} else if (root.val > node.val) {
			if (this.insertNode(root.left, node)) {
				root.left = node
			}
		}
	}
	// returns the parent node of the target
	findNode(root, node, parent) {
		if (root === null) return false
		if (root.val === node) return { target: root, parent }

		if (node < root.val) {
			return this.findNode(root.left, node, root)
		} else if (node > root.val) {
			return this.findNode(root.right, node, root)
		}
		// the node doest exists
		return false
	}
	// remove the node
	removeNode(node) {
		// find node first
		const result = this.findNode(this.root, node)
		console.log('result', result)
		if (result) {
			const { parent, target } = result
			if (target.left === null && target.right === null) {
				// leaf node , so just remove the node
				this.removeLeafNode(result)
			} else if (target.left !== null && target.right === null) {
				// if only has left child
				this.removeNodeWLST(result)
			} else if (target.left === null && target.right !== null) {
				// if only has right child
				this.removeNodeWRST(result)
			} else if (target.left !== null && target.right !== null) {
				// if has both childs
				this.removeNodeWST(result)
			}
		} else {
			throw new Error('node not found !')
		}
	}

	removeLeafNode({ parent, target }) {
		if (!parent) {
			console.log('leaf node, root node')
			this.root = null
			return
		}

		console.log('leaf node')
		if (target.val > parent.val) {
			parent.right = null
		} else if (target.val < parent.val) {
			parent.left = null
		}
	}

	removeNodeWLST({ parent, target }) {
		const temp = target.left
		if (!parent) {
			this.root = temp
			return
		}

		if (target.val > parent.val) {
			parent.right = temp
		} else if (target.val < parent.val) {
			parent.left = temp
		}
		target.left = null
	}

	removeNodeWRST({ parent, target }) {
		const temp = target.right
		if (!parent) {
			this.root = temp
			return
		}
		if (target.val > parent.val) {
			parent.right = temp
		} else if (target.val < parent.val) {
			parent.left = temp
		}
		target.right = null
	}

	removeNodeWST({ parent, target }) {
		const smallestNodeInRST = this.findSmallestInRST(target.right)
		this.removeNode(smallestNodeInRST.val)
		target.val = smallestNodeInRST.val
	}

	depthFirstSearch(root) {
		if (root === null) return
		const stack = [root]
		const result = []
		while (stack.length > 0) {
			const curr = stack.pop()
			result.push(curr.val)
			if (curr.right) stack.push(curr.right)
			if (curr.left) stack.push(curr.left)
		}
		return result
	}

	breadthFirstSearch(root) {
		if (root === null) return
		const queue = [root]
		const result = []
		while (queue.length > 0) {
			const curr = queue.shift()
			result.push(curr.val)
			if (curr.left) queue.push(curr.left)
			if (curr.right) queue.push(curr.right)
		}
		return result
	}

	findSmallestInRST(node) {
		if (node.left === null) return node
		return this.findSmallestInRST(node.left)
	}
	findLargestInLST(node) {
		if (node.right === null) return node
		return this.findLargestInLST(node.right)
	}
}

const bst = new BinarySearchTree(input)
// console.log(bst.values)
// console.log(bst.removeNode(15))
console.log(bst.breadthFirstSearch(bst.root))
