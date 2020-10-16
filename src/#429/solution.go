package solution

type Node struct {
	Val      int
	Children []*Node
}

func levelOrder(root *Node) [][]int {
	if root == nil {
		return [][]int{}
	}
	res := [][]int{}
	helper(root,0,&res)
	return res
}

func helper(root *Node, level int, res *[][]int) {
	if root == nil {
		return
	}

	if level >= len(*res) {
		*res = append(*res, []int{root.Val})
	} else {
		(*res)[level] = append((*res)[level], root.Val)
	}

	for _, node := range root.Children {
		helper(node, level+1, res)
	}
}
