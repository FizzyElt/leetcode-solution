package solution

import "math"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func maxLevelSum(root *TreeNode) int {
	total := []int{}
	helper(root, &total, 0)
	maxLv := -1
	maxNum := math.MinInt32
	for i, v := range total {
		if v > maxNum {
			maxLv = i
			maxNum = v
		}
	}
	return maxLv + 1
}

func helper(root *TreeNode, total *[]int, level int) {
	if root == nil {
		return
	}
	if level > len(*total) {
		*total = append(*total, root.Val)
	} else {
		(*total)[level] += root.Val
	}
	helper(root.Left, total, level+1)
	helper(root.Right, total, level+1)

}
