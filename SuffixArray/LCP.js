// longest common prefix among an array of strings

const createLCPArr = (strs) => {
	const LCP = []
	for (let i = 0; i < strs.length - 1; i++) {
		let pc = 0,
			k = 0,
			str1 = strs[i],
			str2 = strs[i + 1]
		const min = Math.min(str1.length, str2.length)

		while (k < min) {
			if (str1[k] === str2[k]) {
				pc++
			} else {
				break
			}
			k++
		}
		LCP.push(pc)
	}
	return Math.min(...LCP)
}

var longestCommonPrefix = function (strs) {
	const min = createLCPArr(strs)
	return strs[0].slice(0, min) ?? ''
}

const strs = ['dog', 'racecar', 'car']
// console.log(longestCommonPrefix(strs))
/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
	let i = 0
	let stack = []
	while (i < s.length) {
		let cur = null
		if (s[i] === ')') {
			findAndRemove('(')
		} else if (s[i] === '}') {
			findAndRemove('{')
		} else if (s[i] === ']') {
			findAndRemove('[')
		} else {
			stack.push(s[i])
		}
		i++
	}

	function findAndRemove(brckt) {
		const i = stack.findIndex((s) => s === brckt)
		if (i >= 0) stack.splice(i, 1)
		console.log(stack)
	}
	return stack.length ? false : true
}

console.log(isValid('[(]'))
