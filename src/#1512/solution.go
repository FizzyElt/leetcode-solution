package solution

func numIdenticalPairs(nums []int) int {
	numMap := make(map[int]int)

	for _, num := range nums {
		if _, ok := numMap[num]; ok {
			numMap[num] += 1
		} else {
			numMap[num] = 0
		}
	}
	res := 0

	for _, count := range numMap {
		res += ((1 + count) * count) / 2
	}

	return res
}
