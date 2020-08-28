package solution

type Node struct {
	Val      int
	Children []*Node
}

func preorder(root *Node) []int {
	var arr []int
	helper(root,&arr)
	return arr
}

func helper(node *Node, arr *[]int) {
	if node == nil {
		return
	}
	*arr = append(*arr, node.Val)
	for _, n := range node.Children {
		helper(n, arr)
	}
}
