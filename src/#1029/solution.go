package solution

import "sort"

func twoCitySchedCost(costs [][]int) int {
	total := 0
	dArr := []int{}
	for _, c := range costs {
		total += c[0]
		dArr = append(dArr, c[1]-c[0])
	}

	sort.Ints(dArr)

	for i := 0; i < len(dArr)/2; i++ {
		total += dArr[i]
	}
	return total
}
