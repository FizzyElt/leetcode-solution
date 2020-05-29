package solution

type Node struct {
	Val               int
	Left, Right, Next *Node
}

func connect(root *Node) *Node {
	levelMap := map[int]*Node{}
	helper(root, levelMap, 0)
	return root
}

func helper(node *Node, levelMap map[int]*Node, level int) {
	if node == nil {
		return
	}
	if _, ok := levelMap[level]; ok {
		levelMap[level].Next = node
		levelMap[level] = node
	} else {
		levelMap[level] = node
	}
	helper(node.Left, levelMap, level+1)
	helper(node.Right, levelMap, level+1)

}
