package solution

func removeDuplicates(S string) string {
	stack := []byte{}

	for i := 0; i < len(S); i++ {
		if len(stack) == 0 {
			stack = append(stack, S[i])
			continue
		}
		last := stack[len(stack)-1]
		if last == S[i] {
			stack = stack[:len(stack)-1]
		} else {
			stack = append(stack, S[i])
		}
	}

	return string(stack)

}
