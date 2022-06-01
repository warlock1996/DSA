let A = [88, 77, 66, 55, 44, 33, 22, 11] // n = 8
let counter = 0

function selectionSort(array) {
	for (let i = 0; i < array.length; i++) {
		const { currentMin, location } = findMin(array, i)
		const temp = array[i]
		array[i] = currentMin
		array[location] = temp
		console.log(array)
	}
}

// selectionSort(A)

function findMin(array, start = 0) {
	let currentMin = Infinity,
		location = null
	for (let i = start; i < array.length; i++) {
		counter++
		if (currentMin > array[i]) {
			currentMin = array[i]
			location = i
		}
	}
	return { currentMin, location }
}

selectionSort(A)
