package solution

import (
	"math"
	"sort"
)

func threeSumClosest(nums []int, target int) int {
	n, res, diff := len(nums), 0, math.MaxInt32

	if n > 2 {
		sort.Ints(nums)
		for i := 0; i < n-2; i++ {
			for left, right := i+1, n-1; left < right; {
				sum := nums[i] + nums[left] + nums[right]
				if abs(sum-target) < diff {
					res, diff = sum, abs(sum-target)
				}
				if sum == target {
					return res
				} else if sum > target {
					right--
				} else {
					left++
				}
			}
		}
	}
	return res
}

func abs(num int) int {
	if num < 0 {
		return num * -1
	}
	return num
}
