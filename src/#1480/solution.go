package solution

func runningSum(nums []int) []int {
	total := 0
	for i := 0; i < len(nums); i++ {
		total += nums[i]
		nums[i] = total
	}
	return nums
}
