package solution

type ListNode struct {
	Val  int
	Next *ListNode
}

func splitListToParts(root *ListNode, k int) []*ListNode {
	res := make([]*ListNode, k)

	if root == nil {
		return res
	}

	current := root
	count := 0
	for current != nil {
		count++
		current = current.Next
	}

	remainder := count % k
	num := count / k //每一條需要幾個
	var prev *ListNode
	current = root

	for i := 0; i < len(res); i++ {
		res[i] = current
		for j := 0; j < num; j++ {
			prev = current
			current = current.Next
		}
		if remainder > 0 {
			prev = current
			current = current.Next
			remainder--
		}
		prev.Next = nil
	}

	return res
}
