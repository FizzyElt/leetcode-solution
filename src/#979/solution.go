package solution

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func distributeCoins(root *TreeNode) int {
	var res int = 0
	dfs(root, &res)
	return res
}

func dfs(root *TreeNode, res *int) int {
	if root == nil {
		return 0
	}

	left, right := dfs(root.Left, res), dfs(root.Right, res)
	*res += abs(left) + abs(right)
	return left + right + root.Val - 1
}

func abs(a int) int {
	if a < 0 {
		return -a
	}
	return a
}
