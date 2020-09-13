package solution

type ListNode struct {
	Val  int
	Next *ListNode
}

func mergeKLists(lists []*ListNode) *ListNode {
	if len(lists) == 0 {
		return nil
	}

	buckets := make([]int, 20001)
	for _, node := range lists {
		current := node
		for current != nil {
			buckets[current.Val+10000] += 1
			current = current.Next
		}
	}
	head := &ListNode{0, nil}
	current := head
	for i, v := range buckets {
		if v != 0 {
			for j := 0; j < v; j++ {
				node := &ListNode{i - 10000, nil}
				current.Next = node
				current = current.Next
			}
		}
	}
	return head.Next
	
	// if len(lists) == 0 {
	// 	return nil
	// }
	// minV, minI := 10001, 0
	// head := &ListNode{0, nil}
	// current := head
	// for minI != -1 {
	// 	minV = 10001
	// 	minI = -1
	// 	for i, node := range lists {
	// 		if node != nil && node.Val < minV {
	// 			minV = node.Val
	// 			minI = i
	// 		}
	// 	}
	// 	if minI != -1 {
	// 		node := &ListNode{minV, nil}
	// 		current.Next = node
	// 		current = current.Next
	// 		lists[minI] = lists[minI].Next
	// 	}
	// }
	// return head.Next
}
