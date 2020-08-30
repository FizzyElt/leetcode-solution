package solution

type ListNode struct {
	Val  int
	Next *ListNode
}

func mergeTwoLists(l1 *ListNode, l2 *ListNode) *ListNode {
	if l1 == nil {
		return l2
	}
	if l2 == nil {
		return l1
	}
	node := &ListNode{}
	if l1.Val > l2.Val {
		node.Val = l2.Val
		node.Next = mergeTwoLists(l1, l2.Next)
	} else {
		node.Val = l1.Val
		node.Next = mergeTwoLists(l1.Next, l2)
	}
	return node
}
