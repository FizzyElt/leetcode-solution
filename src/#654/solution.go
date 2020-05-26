package solution

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func constructMaximumBinaryTree(nums []int) *TreeNode {

	return buildTree(nums, 0, len(nums)-1)
}

func buildTree(nums []int, start, end int) *TreeNode {
	if len(nums) == 0 {
		return nil
	}

	maxIndex := 0
	for i, v := range nums {
		if v > nums[maxIndex] {
			maxIndex = i
		}
	}

	root := &TreeNode{Val: nums[maxIndex]}
	root.Left = buildTree(nums[:maxIndex], start, maxIndex-1)
	root.Right = buildTree(nums[maxIndex+1:], maxIndex+1, end)

	return root
}
