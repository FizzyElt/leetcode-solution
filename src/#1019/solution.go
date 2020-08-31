package solution

type ListNode struct {
	Val  int
	Next *ListNode
}

func nextLargerNOdes(head *ListNode) []int {
	if head == nil {
		return []int{}
	}

	nodes := []int{}
	for head != nil {
		nodes = append(nodes, head.Val)
		head = head.Next
	}

	larger := make([]int, len(nodes))
	stack := [][]int{}

	for i := 0; i < len(nodes); {
		for len(stack) != 0 && nodes[i] > stack[len(stack)-1][0] {
			top := stack[len(stack)-1]
			stack = stack[:len(stack)-1]
			larger[top[1]] = nodes[i]
		}
		stack = append(stack, []int{nodes[i], i})
		i++
	}

	for _, v := range stack {
		larger[v[1]] = 0
	}
	
	return larger
}
