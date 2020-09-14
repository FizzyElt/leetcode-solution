package solution

type ListNode struct {
	Val  int
	Next *ListNode
}

func swapPairs(head *ListNode) *ListNode {
	if head == nil {
		return nil
	}
	if head.Next == nil {
		return head
	}
	prev := &ListNode{0, nil}
	current := head
	head = head.Next
	for current.Next != nil && current.Next.Next != nil {
		if current.Next != nil {
			temp := current.Next
			current.Next = temp.Next
			temp.Next = current

			prev.Next = temp
			prev = current
			
			current = current.Next
		}
	}
	if current.Next != nil {
		temp := current.Next
		current.Next = temp.Next
		temp.Next = current
		prev.Next = temp
	}
	return head
}
