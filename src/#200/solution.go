package solution

func numIslands(grid [][]byte) int {
	res := 0
	for i := 0; i < len(grid); i++ {
		for j := 0; j < len(grid[i]); j++ {
			if grid[i][j] == '1' {
				res++
				findIsland(i, j, &grid)
			}
		}
	}
	return res
}

func findIsland(x, y int, island *[][]byte) {
	(*island)[x][y] = '0'
	for i := -1; i < 2; i += 2 {
		newX := x + i
		if 0 <= newX && newX < len((*island)) {
			if (*island)[newX][y] == '1' {
				findIsland(newX, y, island)
			}
		}
	}
	for j := -1; j < 2; j += 2 {
		newY := y + j
		if 0 <= newY && newY < len((*island)[0]) {
			if (*island)[x][newY] == '1' {
				findIsland(x, newY, island)
			}
		}
	}
}
