package solution

import "strings"

func findOcuurences(text string, first string, second string) []string {
	newStr := strings.Split(text, " ")
	res := []string{}

	if len(newStr) < 2 {
		return res
	}

	for i := 2; i < len(newStr); i++ {
		if newStr[i-2] == first && newStr[i-1] == second {
			res = append(res, newStr[i])
		}
	}
	return res
}
