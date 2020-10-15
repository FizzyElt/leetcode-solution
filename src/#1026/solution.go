package solution

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func maxAncestorDiff(root *TreeNode) int {
	if root == nil {
		return 0
	}
	return helper(root, root.Val, root.Val)
}

func helper(root *TreeNode, min, max int) int {
	if root == nil {
		return max - min
	}
	if root.Val > max {
		max = root.Val
	}
	if root.Val < min {
		min = root.Val
	}
	left := helper(root.Left, min, max)
	right := helper(root.Right, min, max)
	if left > right {
		return left
	} else {
		return right
	}
}
