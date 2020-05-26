package solution

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func getAllElements(root1 *TreeNode, root2 *TreeNode) []int {
	arr1 := []int{}
	arr2 := []int{}

	if root1 == nil && root2 != nil {
		traverce(root2, &arr2)
		return arr2
	}
	if root1 != nil && root2 == nil {
		traverce(root1, &arr1)
		return arr1
	}

	traverce(root1, &arr1)
	traverce(root2, &arr2)

	i, j := 0, 0
	res := []int{}
	for i < len(arr1) && j < len(arr2) {
		if arr1[i] < arr2[j] {
			res = append(res, arr1[i])
			i++
		} else {
			res = append(res, arr2[j])
			j++
		}
	}

	if i == len(arr1) {
		res = append(res, arr2[j:]...)
	} else {
		res = append(res, arr1[i:]...)
	}
	
	return res
}
func traverce(root *TreeNode, arr *[]int) {
	if root == nil {
		return
	}
	traverce(root.Left, arr)
	*arr = append(*arr, root.Val)
	traverce(root.Right, arr)
}
