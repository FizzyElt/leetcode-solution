package solution

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func bstFromPreorder(preorder []int) *TreeNode {
	root := &TreeNode{
		Val:   preorder[0],
		Left:  nil,
		Right: nil,
	}
	preorder = preorder[1:]
	for _, v := range preorder {
		newNode := &TreeNode{
			Val:   v,
			Left:  nil,
			Right: nil,
		}
		insert(root, newNode)
	}
	return root
}

func insert(root, node *TreeNode) {
	if node.Val > root.Val {
		if root.Right == nil {
			root.Right = node
			return
		}
		insert(root.Right, node)
	} else {
		if root.Left == nil {
			root.Left = node
			return
		}
		insert(root.Left, node)
	}
}
