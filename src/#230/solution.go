package solution

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func kthSmallest(root *TreeNode, k int) int {
	ans := 0
	order := 0

	helper(root, &order, k, &ans)
	return ans
}

func helper(root *TreeNode, order *int, k int, ans *int) {
	if root == nil {
		return
	}

	helper(root.Left, order, k, ans)
	*order += 1
	if *order == k {
		*ans = root.Val
		return
	}
	helper(root.Right, order, k, ans)

	return

}
