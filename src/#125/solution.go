package solution

func isPalindrome(s string) bool {
	strArr := []byte(s)
	left := 0
	right := len(strArr) - 1
	for left < right {
		validCodeL, leftChar := isValidCode(strArr[left])
		validCodeR, rightChar := isValidCode(strArr[right])
		if validCodeL && validCodeR {
			if leftChar==rightChar{
				left++
				right--
			}else{
				return false
			}
		} else {
			if !validCodeL {
				left++
			}
			if !validCodeR {
				right--
			}
		}
	}
	return true
}

func isValidCode(s byte) (bool, byte) {
	if s >= 'A' && s <= 'Z' {
		return true, s + 32
	}
	if (s >= '1' && s <= '9') || (s >= 'a' && s <= 'z') {
		return true, s
	}
	return false, 0
}
