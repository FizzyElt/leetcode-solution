package solution

type TreeNode struct {
	Val         int
	Left, Right *TreeNode
}

func goodNodes(root *TreeNode) int {
	count := 0
	helper(root, -10000, &count)
	return count

}
func helper(root *TreeNode, maxNum int, count *int) {
	if root == nil {
		return
	}
	if root.Val >= maxNum {
		*count += 1
		maxNum = root.Val
	}
	helper(root.Left, maxNum, count)
	helper(root.Right, maxNum, count)
}
