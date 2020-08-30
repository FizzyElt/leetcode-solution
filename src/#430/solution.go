package solution

type Node struct {
	Val   int
	Prev  *Node
	Next  *Node
	Child *Node
}

func flatten(root *Node) *Node {
	if root == nil {
		return nil
	}

	stack := []*Node{}
	current := root
	for current.Child != nil || current.Next != nil {
		if current.Child != nil {
			if current.Next != nil {
				stack = append(stack, current.Next)
			}

			prev := current
			current.Next = current.Child
			current.Child = nil
			current = current.Next
			current.Prev = prev
		} else {
			current = current.Next
		}
	}

	prev := current
	for len(stack) != 0 {
		if current.Next == nil {
			popupNode := stack[len(stack)-1]
			stack = stack[:len(stack)-1]
			current.Next = popupNode
			current = current.Next
			current.Prev = prev
			prev = current
		} else {
			current = current.Next
			prev = current
		}
	}

	return root
}
