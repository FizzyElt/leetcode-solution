package solution

type TreeNode struct{
	Val int 
	Left,Right *TreeNode
}

func preorderTraversal(root *TreeNode) []int{
	ans:=[]int{}
	traversal(root,&ans)
	return ans
}

func traversal(root *TreeNode, arr *[]int) {
	if root == nil {
		return
	}

	*arr = append(*arr, root.Val)
	traversal(root.Left, arr)
	traversal(root.Right, arr)
}