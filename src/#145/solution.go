package solution

type TreeNode struct {
	Val         int
	Left, Right *TreeNode
}

func postorderTraversal(root *TreeNode) []int {
	ans := []int{}
	traversal(root, &ans)
	return ans
}

func traversal(root *TreeNode, arr *[]int) {
	if root == nil {
		return
	}

	traversal(root.Left, arr)
	traversal(root.Right, arr)
	*arr = append(*arr, root.Val)
}
