package solution

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func lcaDeepestLeaves(root *TreeNode) *TreeNode {
	if root == nil {
		return root
	}

	maxDepth := 0
	getMaxDepth(root, &maxDepth, 0)
	maxDepth -= 1
	return helper(root, 0, maxDepth)
}

func helper(root *TreeNode, depth, maxDepth int) *TreeNode {
	if root == nil {
		return nil
	}
	if root.Left == nil && root.Right == nil && depth == maxDepth {
		return root
	}
	nodeR := helper(root.Right, depth+1, maxDepth)
	nodeL := helper(root.Left, depth+1, maxDepth)
	if nodeR != nil && nodeL != nil {
		return root
	}
	if nodeR != nil {
		return nodeR
	}
	if nodeL != nil {
		return nodeL
	}
	return nil
}

func getMaxDepth(root *TreeNode, maxDepth *int, depth int) {
	if root == nil {
		if depth > *maxDepth {
			*maxDepth = depth
		}
		return
	}
	getMaxDepth(root.Left, maxDepth, depth+1)
	getMaxDepth(root.Right, maxDepth, depth+1)
}
