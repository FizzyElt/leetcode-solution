package solution

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func allPossibleFBT(N int) []*TreeNode {
	if N%2 == 0 {
		return []*TreeNode{}
	}
	if N == 1 {
		return []*TreeNode{&TreeNode{0, nil, nil}}
	}
	res := []*TreeNode{}
	for i := 1; i < N; i += 2 {
		L := allPossibleFBT(i)
		R := allPossibleFBT(N - i - 1)
		for _, l := range L {
			for _, r := range R {
				res = append(res, &TreeNode{0, l, r})
			}
		}
	}
	return res
}
