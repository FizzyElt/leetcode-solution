package solution

func allCellsDistOrder(R int, C int, r0 int, c0 int) [][]int {
	visited := make([][]bool, R)
	for i := range visited {
		visited[i] = make([]bool, C)
	}

	directions := [4][2]int{{0, 1}, {0, -1}, {1, 0}, {-1, 0}}

	queue := [][]int{{r0, c0}}
	visited[r0][c0] = true
	ret := make([][]int, 0, R*C)

	for len(queue) != 0 {
		front := queue[0]
		ret = append(ret, front)
		queue = queue[1:]
		for _, d := range directions {
			if x, y := front[0]+d[0], front[1]+d[1]; x >= 0 && y >= 0 && x < R && y < C && !visited[x][y] {
				visited[x][y] = true
				queue = append(queue, []int{x, y})
			}
		}
	}
	return ret
}
