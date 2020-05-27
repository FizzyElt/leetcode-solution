function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

var isSymmetric = function (root) {
  return helper(root, root)
}
function helper(root1, root2) {
  if (root1 === null && root2 === null) return true
  if (root1 === null || root2 === null || root1.val !== root2.val) return false

  return helper(root1.left, root2.right) && helper(root1.right, root2.left)
}
