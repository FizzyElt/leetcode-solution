package solution

import (
	"sort"
)

func threeSum(nums []int) [][]int {
	res := [][]int{}
	sort.Ints(nums)
	for i := 0; i < len(nums)-2; i++ {
		if i > 0 && nums[i] == nums[i-1] {
			continue
		}
		start, end := i+1, len(nums)-1
		for start < end {
			if start > i+1 && nums[start] == nums[start-1] {
				start++
				continue
			}
			if end < len(nums)-1 && nums[end] == nums[end+1] {
				end--
				continue
			}
			sum := nums[i] + nums[start] + nums[end]
			if sum == 0 {
				res = append(res, []int{nums[i], nums[start], nums[end]})
				start++
				end--
			} else if sum < 0 {
				start++
			} else {
				end--
			}
		}
	}
	return res
}
