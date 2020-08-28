package solution

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func maxDepth(root *TreeNode) int {
	if root == nil {
		return 0
	}
	m := 1
	m = max(maxDepth(root.Left)+1, maxDepth(root.Right)+1)
	return m
}
func max(a, b int) int {
	if a > b {
		return a
	}

	return b
}
