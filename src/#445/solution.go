package solution

type ListNode struct {
	Val  int
	Next *ListNode
}

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	if l1 == nil && l2 == nil {
		return nil
	}
	if l1 == nil {
		return l2
	}
	if l2 == nil {
		return l1
	}

	currentL1 := l1
	currentL2 := l2
	count1 := 0
	count2 := 0
	for currentL1 != nil {
		count1++
		currentL1 = currentL1.Next
	}
	for currentL2 != nil {
		count2++
		currentL2 = currentL2.Next
	}

	var res *ListNode
	carry := 0
	if count1 > count2 {
		carry = helper(l1, l2, count1-count2, 0)
		res = l1
	} else {
		carry = helper(l2, l1, count2-count1, 0)
		res = l2
	}


	if carry == 1 {
		return &ListNode{1, res}
	}

	return res
}

func helper(l1, l2 *ListNode, count, index int) int {
	if l1 == nil && l2 == nil {
		return 0
	}

	if index >= count {
		l1.Val = l1.Val + l2.Val + helper(l1.Next, l2.Next, count, index+1)
	} else {
		l1.Val += helper(l1.Next, l2, count, index+1)
	}

	if l1.Val > 9 {
		l1.Val -= 10
		return 1
	}
	return 0
}
