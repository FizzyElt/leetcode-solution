package solution

func twoSum(nums []int, target int) []int {
	m := map[int]int{}

	for i, num := range nums {
		anothor := target - num
		if _, ok := m[anothor]; ok {
			return []int{m[anothor], i}
		}

		m[num] = i
	}

	return nil

}
