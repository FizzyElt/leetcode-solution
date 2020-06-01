package solution

import "strings"

func isPrefixOfWord(sentence string, searchWord string) int {
	words := strings.Split(sentence, " ")
	ans := -1
	swLen := len(searchWord)
	for i, s := range words {
		if len(s) >= swLen {
			if s[:swLen] == searchWord {
				ans = i + 1
				break
			}
		}
	}
	return ans
}
