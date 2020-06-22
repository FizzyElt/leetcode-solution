package solution

func findComplement(num int) int {
	res := 0
	n := 1
	for num != 0 {
		if num%2 == 1 {
			res += n
		}
		n *= 2
		num /= 2
	}
	return res
}
