package solution

type TreeNode struct {
	Val         int
	Left, Right *TreeNode
}

func inorderTraversal(root *TreeNode) []int {
	ans := []int{}
	traversal(root, &ans)
	return ans
}

func traversal(root *TreeNode, arr *[]int) {
	if root == nil {
		return
	}

	traversal(root.Left, arr)
	*arr = append(*arr, root.Val)
	traversal(root.Right, arr)
}
