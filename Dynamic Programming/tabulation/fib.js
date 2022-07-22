const fib = (n) => {
	const table = new Array(n + 1).fill(0)
	table[1] = 1
	for (let i = 0; i <= n; i++) {
		table[i + 1] += table[i]
		table[i + 2] += table[i]
	}
	// console.log(table)
	return table[n] // fibbonaci number in sequence
}

console.log(fib(6))
// console.log(fib(7))
// console.log(fib(8))
// console.log(fib(50))

// tabulation strategy
// 1. create a table with size n + 1 and fill it with 0
// 2. start iterating over and add values to each location
// 3. return the value at the index
