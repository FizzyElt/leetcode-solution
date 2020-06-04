package solution

type TreeNode struct {
	Val         int
	Left, Right *TreeNode
}

func delNodes(root *TreeNode, to_delete []int) []*TreeNode {
	res := []*TreeNode{}
	newRoot:=helper(root,to_delete,&res)
	if newRoot!=nil{
		res=append(res,newRoot)
	}
	return res

}
func helper(root *TreeNode, toDel []int, tn *[]*TreeNode) *TreeNode {
	if root == nil {
		return nil
	}
	root.Left = helper(root.Left, toDel, tn)
	root.Right = helper(root.Right, toDel, tn)

	for _, v := range toDel {
		if v == root.Val {
			if root.Left != nil {
				*tn = append(*tn, root.Left)
			}
			if root.Right != nil {
				*tn = append(*tn, root.Right)
			}
			return nil
		}
	}
	return root
}
