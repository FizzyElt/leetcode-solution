package solution

func shuffle(nums []int, n int) []int {
	res := []int{}
	for i := 0; i < n; i++ {
		res = append(res, nums[i], nums[i+n])
	}
	return res
}
