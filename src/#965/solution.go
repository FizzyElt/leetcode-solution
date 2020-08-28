package solution

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func isUnivalTree(root *TreeNode) bool {
	set := map[int]bool{}
	return helper(root, set)
}

func helper(root *TreeNode, set map[int]bool) bool {
	if root == nil {
		return true
	}

	if len(set) == 0 {
		set[root.Val] = true
		return helper(root.Left, set) && helper(root.Right, set)
	} else if _, ok := set[root.Val]; ok && len(set) == 1 {
		return helper(root.Left, set) && helper(root.Right, set)
	}
	return false
}
