package solution

type TreeNode struct {
	Val         int
	Left, Right *TreeNode
}

type BSTIterator struct {
	InorderArr []int
	Index      int
}

func Constructor(root *TreeNode) BSTIterator {
	arr := []int{}
	inorderTraversal(root, &arr)
	return BSTIterator{
		InorderArr: arr,
		Index:      0,
	}
}

/** @return the next smallest number */
func (this *BSTIterator) Next() int {
	if this.Index < len(this.InorderArr) {
		res := this.InorderArr[this.Index]
		this.Index++
		return res
	}
	return 0
}

/** @return whether we have a next smallest number */
func (this *BSTIterator) HasNext() bool {
	if this.Index < len(this.InorderArr) {
		return true
	}
	return false
}

func inorderTraversal(root *TreeNode, arr *[]int) {
	if root == nil {
		return
	}
	inorderTraversal(root.Left, arr)
	*arr = append(*arr, root.Val)
	inorderTraversal(root.Right, arr)
}
