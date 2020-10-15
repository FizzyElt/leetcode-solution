package solution

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

//pre = [1,2,4,5,3,6,7], post = [4,5,2,6,7,3,1]

func constructFromPrePost(pre []int, post []int) *TreeNode {
	if len(pre) == 0 {
		return nil
	}
	root := &TreeNode{Val: pre[0]}
	if len(pre) == 1 {
		return root
	}
	pre = pre[1:]
	post = post[:len(post)-1]

	leftLen := 0
	for i, val := range post {
		if pre[0] == val {
			leftLen = i + 1
			break
		}
	}
	leftPre := pre[:leftLen]
	rightPre := pre[leftLen:]
	leftPost := post[:leftLen]
	rightPost := post[leftLen:]

	root.Left = constructFromPrePost(leftPre, leftPost)
	root.Right = constructFromPrePost(rightPre, rightPost)

	return root
}
