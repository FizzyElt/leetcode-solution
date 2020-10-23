package solution

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func largestValues(root *TreeNode) []int {
	res := []int{}
	helper(root, 0, &res)
	return res
}

func helper(root *TreeNode, level int, levelList *[]int) {
	if root == nil {
		return
	}

	if level >= len(*levelList) {
		*levelList = append(*levelList, root.Val)
	} else if root.Val > (*levelList)[level] {
		(*levelList)[level] = root.Val
	}
	helper(root.Left, level+1, levelList)
	helper(root.Right, level+1, levelList)
}
