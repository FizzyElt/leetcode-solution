function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

var rangeSumBST = function (root, L, R) {
  if (root === null) {
    return 0
  }
  let v = root.val >= L && root.val <= R ? root.val : 0
  return v + rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R)
}
