function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

var sumRootToLeaf = function (root) {
  if (root === null) {
    return 0
  }
  return dfs(root, 0)
}

function dfs(root, value) {
  let current = (value << 1) + root.val
  if (root.left === null && root.right === null) {
    return current
  }
  let sum = 0
  if (root.left !== null) {
    sum += dfs(root.left, current)
  }
  if (root.right !== null) {
    sum += dfs(root.right, current)
  }

  return sum
}
