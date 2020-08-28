package solution

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func pseudoPalindromicPaths(root *TreeNode) int {
	var res int = 0
	set := [10]int{}
	helper(root, set, &res)
	return res
}

func helper(root *TreeNode, set [10]int, res *int) {
	if root.Left == nil && root.Right == nil {
		set[root.Val]++
		*res += pseudoPalindromicCheck(set)
		return
	}
	set[root.Val]++
	if root.Left != nil {
		helper(root.Left, set, res)
	}
	if root.Right != nil {
		helper(root.Right, set, res)
	}
}

func pseudoPalindromicCheck(set [10]int) int {
	odd := 0
	for _, v := range set {
		if v%2 == 1 {
			odd++
		}
	}
	if odd > 1 {
		return 0
	}
	return 1
}
