// suffix array
// suffix array is an array of all the suffixes of a string in a sorted order

// create sentinels map
const SENTINELS = new Map()
SENTINELS.set('#', 'green')
SENTINELS.set('$', 'red')
SENTINELS.set('%', 'blue')
SENTINELS.set('&', 'white')
SENTINELS.set('+', 'gray')
SENTINELS.set('-', 'black')
SENTINELS.set('*', 'gray')

const sort = (values) => {
	return values.sort(([index, lcp, substring], [indexB, lcpB, substringB]) => {
		if (substring > substringB) return 1
		if (substring < substringB) return -1
		return 0
	})
}

const getKey = (str) => {
	const keys = [...SENTINELS.keys()]
	const key = str.split('').find((char) => keys.includes(char))
	return key
}

const joinString = (strArray) => {
	const sentinels = [...SENTINELS.keys()]
	for (let i = 0; i < strArray.length; i++) {
		strArray[i] = strArray[i] + sentinels[i]
	}
	return strArray.join('')
}

const trimSentinals = (suffixArray) => {
	return suffixArray.filter(([i, lcp, ss, col]) => ss.charCodeAt(0) >= 65)
}

const checkMap = (map) => {
	return [...map.values()].some((val) => val === 0)
}

const createColorMap = (arr) => {
	const cMap = new Map()
	for (const [i, lcp, suf, color] of arr) {
		cMap.set(color, 0)
	}
	return cMap
}

class SuffixArray {
	constructor(str) {
		this.values = this.buildSuffixArray(str)
		this.LCS = new Set()
		this.LCP = -Infinity
	}

	buildSuffixArray(str) {
		let sa = []
		for (let i = 0; i < str.length; i++) {
			const slice = str.slice(i)
			const key = getKey(slice)
			const color = SENTINELS.get(key)
			sa.push([i, 0, slice, color])
		}
		return sort(sa)
	}

	findLCPValue(values) {
		for (let i = 0; i < values.length - 1; i++) {
			const ss1 = values[i][2]
			const ss2 = values[i + 1][2]
			const length = Math.min(ss1.length, ss2.length)
			for (let j = 0; j < length; j++) {
				if (ss1[j] === ss2[j]) {
					values[i + 1][1] = values[i + 1][1] + 1
				} else {
					break
				}
			}
		}
		return values
	}

	findUniqueSubStringLength() {
		const n = (this.values.length * (this.values.length + 1)) / 2
		console.log('possible substrings', n)
		const lcpSum = this.values.reduce((acc, [i, lcp, str]) => acc + lcp, 0)
		return n - lcpSum
	}

	findLCS(...strings) {
		const str = joinString(strings)
		const sufArr = this.buildSuffixArray(str)
		const arr = this.findLCPValue(trimSentinals(sufArr))
		const cMap = createColorMap(arr)
		console.log(arr, arr.length)

		let i = 0,
			j = -1
		while (i < arr.length - 1) {
			while (checkMap(cMap) && j < arr.length - 1) {
				j++
				if (cMap.has(arr[j][3])) {
					const val = cMap.get(arr[j][3]) + 1
					cMap.set(arr[j][3], val)
				} else {
					cMap.set(arr[j][3], 1)
				}
			}
			const { windowLCP, windowLCS } = this.lcsInWindow(i, j, arr)
			if (windowLCP > this.LCP) {
				this.LCP = windowLCP
				this.LCS.clear()
				this.LCS.add(windowLCS)
			}
			cMap.set(arr[i][3], cMap.get(arr[i][3]) - 1)
			i++
		}
		console.log(this.LCS, this.LCP)
		return this.LCS
	}

	lcsInWindow(i, j, arr) {
		arr = arr.slice(i, j + 1)
		let windowLCS = null
		let windowLCP = +Infinity
		// starting k = 1 ignoring the first value in the window
		for (let k = 1; k < arr.length; k++) {
			const [i, lcp, ss, col] = arr[k]
			if (lcp <= windowLCP) {
				windowLCP = lcp
				windowLCS = ss.slice(0, lcp)
			}
		}
		console.log(arr, { windowLCP, windowLCS }, i, j)
		return { windowLCP, windowLCS }
	}
}

const sa = new SuffixArray('ABABBAABAA')

const testcase = ['flower', 'flow', 'flight', 'flowen']

sa.findLCS(...testcase)
// // input aabaab
// // find the repeated (at-least twice) substrings in this string
// const str = 'aabaab'
// const all = new Set()
// for (let i = 0; i < str.length; i++) {
// 	for (let j = 0; j < str.length; j++) {
// 		if (str.length - j > i) {
// 			console.log({ i, j, sliced: str.slice(i, str.length - j), str: str })
// 			all.add(str.slice(i, str.length - j))
// 		}
// 		// all.push()
// 	}
// }

// console.log(all, all.size)
