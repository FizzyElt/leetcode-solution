function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

var countNodes = function (root) {
  if (!root) {
    return 0
  }
  return 1 + countNodes(root.left) + countNodes(root.right)
}
