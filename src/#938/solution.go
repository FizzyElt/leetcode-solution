package solution

type TreeNode struct {
	Val         int
	Left, Right *TreeNode
}

func rangeSumBST(root *TreeNode, L int, R int) int {
	if root == nil {
		return 0
	}
	v := 0
	if root.Val >= L && root.Val <= R {
		v = root.Val
	}
	return v + rangeSumBST(root.Left, L, R) + rangeSumBST(root.Right, L, R)
}
