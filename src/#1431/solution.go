package solution

func kidsWithCandies(candies []int, extraCandies int) []bool {
	maxNum := 0
	for _, v := range candies {
		if v > maxNum {
			maxNum = v
		}
	}
	res := make([]bool, len(candies))
	for i, v := range candies {
		if v+extraCandies >= maxNum {
			res[i] = true
		} else {
			res[i] = false
		}
	}
	return res
}
