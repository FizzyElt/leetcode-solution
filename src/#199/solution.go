package solution

type TreeNode struct {
	Val         int
	Left, Right *TreeNode
}

func rightSideView(root *TreeNode) []int {
	ans := []int{}
	traversal(root, &ans, 0)
	return ans
}

func traversal(root *TreeNode, arr *[]int, level int) {
	if root == nil {
		return
	}
	if level == len(*arr) {
		*arr = append(*arr, root.Val)
	}
	traversal(root.Right, arr, level+1)
	traversal(root.Left, arr, level+1)
}
