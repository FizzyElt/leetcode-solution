package solution

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func sumRootToLeaf(root *TreeNode) int {
	if root == nil {
		return 0
	}
	return dfs(root, 0)
}

func dfs(root *TreeNode, value int) int {
	current := (value << 1) + root.Val
	if root.Left == nil && root.Right == nil {
		return current
	}

	sum := 0
	if root.Left != nil {
		sum += dfs(root.Left, current)
	}
	if root.Right != nil {
		sum += dfs(root.Right, current)
	}
	return sum
}
