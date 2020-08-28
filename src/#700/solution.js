function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

var searchBST = function (root, val) {
  if (root === null) {
    return null
  }

  if (root.val > val) {
    return searchBST(root.left, val)
  } else if (root.val < val) {
    return searchBST(root.right, val)
  }

  return root
}
