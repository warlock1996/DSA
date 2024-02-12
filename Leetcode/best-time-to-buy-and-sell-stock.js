const maxProfit = function (prices) {
	let maxP = 0
	for (let i = 0; i < prices.length - 1; i++) {
		for (let j = i + 1; j < prices.length; j++) {
			const profit = prices[j] - prices[i]
			if (profit > maxP) maxP = profit
		}
	}

	return maxP
}

console.log(maxProfit())
