package solution

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func findFrequentTreeSum(root *TreeNode) []int {
	m := make(map[int]int)
	traverse(root, m)
	res := make([]int, 0)

	max := -1
	for sum, cnt := range m {
		if max <= cnt {
			if max < cnt {
				max = cnt
				res = res[:0]
			}
			res = append(res, sum)
		}
	}
	return res
}

func traverse(root *TreeNode, m map[int]int) int {
	if root == nil {
		return 0
	}

	leftTotal := traverse(root.Left, m)
	rightTotal := traverse(root.Right, m)

	total := root.Val + leftTotal + rightTotal

	m[total] += 1

	return total
}
