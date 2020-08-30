package solution

func intersection(nums1 []int, nums2 []int) []int {
	map1 := map[int]int{}
	res := []int{}
	for _, num := range nums1 {
		map1[num] = 0
	}
	for _, num := range nums2 {
		count, ok := map1[num]
		if ok && count == 0 {
			res = append(res, num)
		}
	}

	return res

}
