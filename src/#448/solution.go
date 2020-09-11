package solution

func findDisappearedNumbers(nums []int) []int {
	res := []int{}
	for i := 0; i < len(nums); i++ {
		index := abs(nums[i])
		if nums[index-1] > 0 {
			nums[index-1] *= -1
		}
	}
	for i, num := range nums {
		if num > 0 {
			res = append(res, i+1)
		}
	}
	return res
}

func abs(num int) int {
	if num < 0 {
		return -num
	}
	return num
}
