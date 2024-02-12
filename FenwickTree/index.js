// fenwick tree
// used for range queries, adding array indexes etc.
// fenwick tree is implemented using an array which is the sum of every two consecutive values of
// input array, to sum from an index or to find range when two indices are given, we use whats called
// the cascading algorithm which moves down from the given index towards the zero index, we hop down or
//  cascade towards zero index adding up all the locations

function lsb(index) {
	const binary = toBinary(index)
	const pos = binary.length - binary.lastIndexOf('1')
	console.log({ binary, pos, index })
	return Math.pow(2, pos - 1)
}

// convert integer to binary
function toBinary(num) {
	let rem = '',
		qout
	while (num != 0) {
		rem += num % 2
		qout = Math.floor(num / 2)
		num = qout
	}
	return rem.split('').reverse().join('')
}

class FenwickTree {
	constructor(values = []) {
		this.tree = this.constructFenwickTree(values)
	}

	constructFenwickTree(array) {
		let j = 0
		// iterative approach to construct this tree
		// while (i < array.length) {
		// 	const x = fenwick[i] + array[i]
		// 	fenwick.push(x)
		// 	i++
		// }
		// a better approach with O(log n) complexity
		for (let i = 1; i < array.length; i++) {
			j = i + lsb(i)
			if (j < array.length) {
				array[j] = array[j] + array[i]
			}
		}
		console.log(array[0])
		return array
	}

	prefixSum(k) {
		let sum = 0
		while (k !== 0) {
			sum += this.tree[k]
			k = k - lsb(k)
		}
		return sum
	}

	add(i, k) {
		while (i < this.tree.length) {
			this.tree[i] += k
			i += lsb(i)
		}
		return this.tree
	}

	rangeSum(i, j) {
		const rangeSum = this.prefixSum(j) - this.prefixSum(i - 1)
		return rangeSum
	}
}

const array = [5, -3, 6, 1, 0, -4, 11, 6, 2, 7] // 10 elements

const tree = new FenwickTree(array)
console.log(tree)

console.log(tree.add(5, 8))
