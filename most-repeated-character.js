const mostRepeated = (s) => {
	const count = {}
	let max = { char: null, count: 0 }
	for (let i = 0; i < s.length; i++) {
		if (!isNaN(s[i])) continue

		if (s[i] in count) {
			count[s[i]] += 1
			if (max.count < count[s[i]]) {
				max.char = s[i]
				max.count = count[s[i]]
			}
		} else {
			count[s[i]] = 0
			max.char = s[i]
			max.count = 0
		}
	}

	return max.char
}

console.log(mostRepeated('slkjfsklffsbfksjhfsakjf'))
console.log(mostRepeated('s'))
console.log(mostRepeated('ssssssslkererwwwwwSSSSS2234234'))
