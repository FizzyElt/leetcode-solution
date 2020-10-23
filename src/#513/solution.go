package solution

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func findBottomLeftValue(root *TreeNode) int {
	maxLevel := 0
	res := 0
	helper(root, 0, &maxLevel, &res)
	return res
}

func helper(root *TreeNode, level int, maxLevel, res *int) {
	if root == nil {
		return
	}
	if level >= *maxLevel {
		*res = root.Val
		*maxLevel++
	}
	helper(root.Left, level+1, maxLevel, res)
	helper(root.Right, level+1, maxLevel, res)
}
