package solution

type ListNode struct {
	Val  int
	Next *ListNode
}

func oddEvenList(head *ListNode) *ListNode {
	if head == nil {
		return nil
	}

	current := head

	oddNode := &ListNode{0, nil}
	res := oddNode
	evenNode := &ListNode{0, nil}
	evenHead := evenNode

	for current.Next != nil && current.Next.Next != nil {
		oddNode.Next = current
		oddNode = oddNode.Next
		if current.Next != nil {
			evenNode.Next = current.Next
			evenNode = evenNode.Next
		}
		current = current.Next.Next
	}

	oddNode.Next = current
	oddNode = oddNode.Next
	if current.Next != nil {
		evenNode.Next = current.Next
		evenNode = evenNode.Next
	}

	evenNode.Next = nil
	oddNode.Next = evenHead.Next

	return res.Next
}
