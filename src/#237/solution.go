package solution

type ListNode struct {
	Val  int
	Next *ListNode
}

func deleteNode(node *ListNode) {
	currVal := node.Val
	nextVal := node.Next.Val

	temp := currVal
	node.Val = nextVal
	node.Next.Val = temp
	node.Next = node.Next.Next
}
