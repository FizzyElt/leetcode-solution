package solution

func intToRoamn(num int) string {
	integer := []int{1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1}
	roman := []string{"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"}

	res := ""
	pointer := 0
	for num > 0 {
		if num >= integer[pointer] {
			num -= integer[pointer]
			res += roman[pointer]
		} else {
			pointer++
		}
	}
	return res
}
