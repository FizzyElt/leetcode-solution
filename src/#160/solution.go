package solution

type ListNode struct {
	Val  int
	Next *ListNode
}

func getIntersectionNode(headA, headB *ListNode) *ListNode {
	if headA == nil || headB == nil {
		return nil
	}
	cnt := 0
	currentA := headA
	currentB := headB
	for currentA != nil || currentB != nil {
		if currentA != nil {
			cnt++
			currentA = currentA.Next
		}
		if currentB != nil {
			cnt--
			currentB = currentB.Next
		}
	}
	if cnt > 0 {
		currentA, currentB = headA, headB
	} else {
		currentA, currentB, cnt = headB, headA, -cnt
	}
	for i := cnt; i > 0; i-- {
		currentA = currentA.Next
	}
	for currentA != currentB {
		currentA = currentA.Next
		currentB = currentB.Next
	}
	return currentA
}
