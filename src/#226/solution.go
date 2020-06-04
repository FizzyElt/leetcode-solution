package solution

type TreeNode struct {
	Val         int
	Left, Right *TreeNode
}

func invertTree(root *TreeNode) *TreeNode {
	if root != nil {
		invertTree(root.Right)
		invertTree(root.Left)
		if root.Left != nil || root.Right != nil {
			root.Right, root.Left = root.Left, root.Right
		}
		return root
	} else {
		return nil
	}
}
