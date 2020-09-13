package solution

type ListNode struct {
	Val  int
	Next *ListNode
}

func numComponents(head *ListNode, G []int) int {

	Gmap := map[int]bool{}

	for _, n := range G {
		Gmap[n] = true
	}

	res := 0
	check := false
	current := head

	for current != nil {
		if ok := Gmap[current.Val]; ok {
			if !check {
				res++
				check = true
			}
		} else {
			check = false
		}
		current = current.Next
	}
	return res
}
