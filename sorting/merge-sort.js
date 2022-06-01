/*
    takes in arrayA, and arrayB, returns merged arrayC
*/

const A = [22, 44, 55, 77, 88]
const B = [33, 66, 70]

function mergeSortedArrays(arrayA, arrayB) {
	let arrayC = []
	let QA = 0
	let QB = 0

	while (QA < arrayA.length && QB < arrayB.length) {
		if (arrayA[QA] < arrayB[QB]) {
			arrayC.push(arrayA[QA])
			QA++
		} else {
			arrayC.push(arrayB[QB])
			QB++
		}
	}

	if (QA + 1 > arrayA.length) {
		for (let j = QB; j < arrayB.length; j++) {
			arrayC.push(arrayB[j])
		}
	}

	if (QB + 1 > arrayB.length) {
		for (let j = QA; j < arrayA.length; j++) {
			arrayC.push(arrayA[j])
		}
	}

	return arrayC
}

const X = [66, 33, 40, 22, 55, 88, 60, 11, 80, 20, 50, 44, 77, 30]

function MS(LB, UB) {
	if (LB < UB) {
		// large list

		const MID = Math.floor((LB + UB) / 2)
		console.log({ LB, UB, MID })
		const S = MS(LB, MID)
		const R = MS(MID + 1, UB)
		const result = mergeSortedArrays(S, R)
		console.log(result)
		return result
	} else {
		// small list with 1 element or same element
		console.log({ LB, UB, 'X[LB]': X[LB] })
		return [X[LB]]
	}
}

const result = MS(0, 13)
console.log(result)

