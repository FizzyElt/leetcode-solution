function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

var bstFromPreorder = function (preorder) {
  function traversal(arr) {
    if (arr.length < 1) return null

    const root = new TreeNode(arr[0])

    if (arr.length == 1) return root
    let firstMax = arr.findIndex(n => n > root.val)
    if (firstMax == -1) firstMax = arr.length


    root.left = traversal(arr.slice(1, firstMax))
    root.right = traversal(arr.slice(firstMax))
    
    return root
  }

  return traversal(preorder)
}
