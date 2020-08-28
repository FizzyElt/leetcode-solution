package solution

type Node struct {
	Val      int
	Children []*Node
}

func maxDepth(root *Node) int {
	if root == nil {
		return 0
	}
	m := 1
	for _, n := range root.Children {
		m = max(m, maxDepth(n)+1)
	}
	return m
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
