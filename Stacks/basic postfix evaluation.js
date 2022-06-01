// evaluate a postfix exp
const test = ['12', '7', '3', '-', '/', '2', '1', '5', '+', '*', '+', '4', '5', '+', '-']

function evaluatePostFix(postFixExp = []) {
	let top = 0
	const stack = []
	while (top < postFixExp.length) {
		if (isNaN(postFixExp[top])) {
			const result = evaluate(stack[stack.length - 2], stack[stack.length - 1], postFixExp[top])
			stack.pop()
			stack.pop()
			stack.push(result)
		} else {
			stack.push(postFixExp[top])
		}
		top++
	}
	return stack[0]
}

function evaluate(a, b, operator) {
	return eval(`${a}${operator}${b}`)
}

evaluatePostFix(test)
