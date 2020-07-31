package solution

func isValid(s string) bool {
	stack := []byte{}
	if len(s) == 1 {
		return false
	}
	for i, c := range []byte(s) {
		if i == 0 {
			if c == '}' || c == ')' || c == ']' {
				return false
			}
		}
		stackLen := len(stack)
		if c == '[' || c == '{' || c == '(' {
			stack = append(stack, c)
		} else if c == ']' {
			if stackLen > 0 && stack[stackLen-1] == '[' {
				stack = stack[:len(stack)-1]
			} else {
				return false
			}
		} else if c == '}' {
			if stackLen > 0 && stack[stackLen-1] == '{' {
				stack = stack[:len(stack)-1]
			} else {
				return false
			}
		} else if c == ')' {
			if stackLen > 0 && stack[stackLen-1] == '(' {
				stack = stack[:len(stack)-1]
			} else {
				return false
			}
		}
	}
	return len(stack) == 0
}
