package solution

type TreeNode struct {
	Val         int
	Left, Right *TreeNode
}

func getTargetCopy(original *TreeNode, cloned *TreeNode, target *TreeNode) *TreeNode {
	if cloned == nil {
		return nil
	}
	if cloned.Val == target.Val {
		return cloned
	}
	Lval := getTargetCopy(original, cloned.Left, target)
	Rval := getTargetCopy(original, cloned.Right, target)
	if Lval != nil {
		return Lval
	} else if Rval != nil {
		return Rval
	} else {
		return nil
	}
}
