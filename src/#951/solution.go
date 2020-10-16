package solution

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func flipEquiv(root1 *TreeNode, root2 *TreeNode) bool {
	if root1 == nil && root2 == nil {
		return true
	}
	if root1 == nil || root2 == nil {
		return false
	}

	if root1.Val == root2.Val {
		left := true
		right := true
		if root1.Left != nil {
			if root2.Left != nil && root2.Left.Val == root1.Left.Val {
				left = flipEquiv(root1.Left, root2.Left)
			} else if root2.Right != nil && root2.Right.Val == root1.Left.Val {
				left = flipEquiv(root1.Left, root2.Right)
			} else {
				left = false
			}
		}
		if root1.Right != nil {
			if root2.Left != nil && root2.Left.Val == root1.Right.Val {
				right = flipEquiv(root1.Right, root2.Left)
			} else if root2.Right != nil && root2.Right.Val == root1.Right.Val {
				right = flipEquiv(root1.Right, root2.Right)
			} else {
				right = false
			}
		}
		return left && right
	}
	return false
}
