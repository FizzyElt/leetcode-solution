function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

var maxDepth = function (root) {
  if (root === null) {
    return 0
  }

  let m = 1
  m = Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1)
  return m
}
