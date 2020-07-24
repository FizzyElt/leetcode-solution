package solution

func letterCasePermutation(S string) []string {
	bytes := []byte(S)
	output := []string{}
	helper(0, bytes, []byte{}, &output)
	return output
}

func helper(index int, str []byte, currStr []byte, output *[]string) {
	if index >= len(str) {
		*output = append(*output, string(currStr))
		return
	}

	if str[index] <= '9' && str[index] >= '1' {
		helper(index+1, str, append(currStr, str[index]), output)
		return
	}
	if str[index] >= 'A' && str[index] <= 'Z' {
		helper(index+1, str, append(currStr, str[index]), output)
		helper(index+1, str, append(currStr, str[index]+32), output)
		return
	}
	if str[index] >= 'a' && str[index] <= 'z' {
		helper(index+1, str, append(currStr, str[index]), output)
		helper(index+1, str, append(currStr, str[index]-32), output)
		return
	}
}
