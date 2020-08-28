package solution

type TreeNode struct {
	Val         int
	Left, Right *TreeNode
}

func increasingBST(root *TreeNode) *TreeNode {
	var arr []int
	inOrder(root, &arr)

	head := &TreeNode{Val: arr[0]}
	current := head
	for _, v := range arr[1:] {
		current.Right = &TreeNode{Val: v}
		current = current.Right
	}

	return head
}

func inOrder(root *TreeNode, arr *[]int) {
	if root == nil {
		return
	}

	inOrder(root.Left, arr)
	*arr = append(*arr, root.Val)
	inOrder(root.Right, arr)
}
