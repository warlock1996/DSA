const exp = 'A + (B * C - (D / E ^ F) * G) * H'

const operators = ['+', '-', '*', '/', '^']

const prec = new Map()
prec.set('+', 1)
prec.set('-', 1)
prec.set('*', 2)
prec.set('/', 3)
prec.set('^', 4)

function isOp(operator) {
	return operators.includes(operator)
}

function infixToPostFix(Q) {
	let n = 0
	const stack = []
	let result = ''
	// push ) to end of Q
	Q = Q + ')'
	// push ( to stack
	stack.push('(')

	while (n < Q.length) {
		if (isOp(Q[n])) {
			if (isOp(stack[stack.length - 1])) {
				if (prec.get([Q[n]]) < prec.get([stack[stack.length - 1]])) {
					result = result + stack[stack.length - 1]
					stack.pop()
					stack.push(Q[n])
				} else {
					stack.push(Q[n])
				}
			} else {
				stack.push(Q[n])
			}
		} else if (Q[n] == '(') {
			stack.push('(')
		} else if (Q[n] == ')') {
			while (stack[stack.length - 1] !== '(') {
				result = result + stack[stack.length - 1]
				stack.pop()
			}
			stack.pop()
		} else {
			result = result + Q[n]
		}
		n++
		console.log(stack, result)
	}
}

console.log(infixToPostFix(exp))
