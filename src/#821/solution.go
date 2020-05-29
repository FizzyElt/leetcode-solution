package solution

func shortestToChar(S string, C byte) []int {
	Cindex := []int{}
	for i, v := range []byte(S) {
		if v == C {
			Cindex = append(Cindex, i)
		}
	}
	res := []int{}
	for i, v := range []byte(S) {
		if v == C {
			res = append(res, 0)
		} else {
			min := 10000
			for _, idx := range Cindex {
				dis := i - idx
				if dis < 0 {
					dis *= -1
				}
				if dis < min {
					min = dis
				}
			}
			res = append(res, min)

		}
	}
	return res
}
