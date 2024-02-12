var minTimeToVisitAllPoints = function (points) {
	let totalMinTime = +Infinity,
		i = 0
	const memo = {}
	while (i < points.length - 1) {
		const minTime = dfs(points[i].join(''), points[i + 1].join(''), memo)
		if (minTime < totalMinTime) {
			totalMinTime = minTime
		}
		i++
	}

	return totalMinTime
}

const dfs = (src, dst, memo, up = false, down = false) => {
	if (src in memo) return memo[src]
	if (src > dst && up) return 0
	if (src < dst && down) return 0
	if (src === dst) return 1

	let time = 0
	if (src < dst) {
		// up
		time += Math.min(
			dfs(src + 11, dst, memo, true, false),
			dfs(src + 10, dst, memo, true, false),
			dfs(src + 1, dst, memo, true, false)
		)
	} else {
		// down
		time += Math.min(
			dfs(src - 11, dst, memo, false, true),
			dfs(src - 10, dst, memo, false, true),
			dfs(src - 1, dst, memo, false, true)
		)
	}

	memo[src] = time
	return time
}

console.log('this solution doest work right now;')
return
console.log(
	minTimeToVisitAllPoints([
		[1, 1],
		[1, 2],
	])
)
