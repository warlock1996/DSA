// balances binary search trees, or avl trees which conform the binary search tree invariant
// but also confirms a balance tree

class Node {
	constructor(val) {
		this.val = val
		this.left = null
		this.right = null
		this.h = 0
		this.bF = 0
	}
}

class AVLTree {
	constructor() {
		this.root = null
	}

	insert(value) {
		this.root = this.insertNode(this.root, value)
	}

	insertNode(node, value) {
		if (node === null) return new Node(value)

		if (value < node.val) {
			node.left = this.insertNode(node.left, value)
		}

		if (value > node.val) {
			node.right = this.insertNode(node.right, value)
		}

		this.update(node)
		return this.balance(node)
	}

	update(node) {
		let lh = -1,
			rh = -1
		if (node.left) lh = node.left.h
		if (node.right) rh = node.right.h
		node.h = 1 + Math.max(lh, rh)
		node.bF = rh - lh
		// console.log('update:', node, node.val, node.h, node.bF)
	}
	balance(node) {
		if (node.bF === -2) {
			// left heavy
			if (node.left.bF <= 0) {
				// left left case
				console.log('left left case')
				return this.rotateRight(node)
			} else if (node.left.bF > 0) {
				// left right case
				console.log('left right case')
				node.left = this.rotateLeft(node.left)
				return this.rotateRight(node)
			}
		} else if (node.bF === +2) {
			// right heavy
			if (node.right.bF >= 0) {
				// right right case
				console.log('right right case', node.val)
				return this.rotateLeft(node)
			} else if (node.right.bF < 0) {
				// right left case
				console.log('right left case')
				node.right = this.rotateRight(node.right)
				return this.rotateLeft(node)
			}
		}

		return node
	}

	rotateRight(node) {
		const temp = node.left
		node.left = node.left.right
		temp.right = node
		this.update(node)
		this.update(temp)
		return temp
	}

	rotateLeft(node) {
		const temp = node.right
		node.right = node.right.left
		temp.left = node
		this.update(node)
		this.update(temp)
		return temp
	}
	/* 
					  2
					 / \
					1   3
					     \
					      4
					  	   \
						    5

					  2
					 / \
					1   4
					   / \
					  3   5
                           \
						    6

					  
						4	
					   / \
					  2   5
                     / \   \
					1	3   6

										  
						4	
					   / \
					  2   5
                     / \   \
					1	3   6
					         \
							  7
							   \ 
							    8






	(1) left left case
	                  4     -->     2
	                 /			   / \	
	                2             1   4
				   / \			 	 / 
				  1   3				3  

	

	(2) right right case

			  4        -->      6
			   \               / \
			    6             4   8
			   / \             \  
			  5	  8             5

	
	(3) left right case 
	                  5          5          3
	                 /        	/		   / \
	                2	       3		  2	  5
					 \	   	  /
				      3    	 2


	 (4) right left case
	                  4       4            5
	                   \       \          / \
	                    6 	    5	     4   6
					   /		 \	      
				      5	     	  6	     
	
						
						  */
}

const tree = new AVLTree()
tree.insert(9)
tree.insert(8)
tree.insert(7)
tree.insert(6)
tree.insert(5)
tree.insert(4)
tree.insert(3)
tree.insert(2)
tree.insert(1)
tree.insert(0)
console.log(tree.root)
