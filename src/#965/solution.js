function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

var isUnivalTree = function (root) {
  let set = new Set()
  return helper(root)
  function helper(root) {
    if (root === null) {
      return true
    }
    if (set.size === 0) {
      set.add(root.val)
      return helper(root.left) && helper(root.right)
    } else if (set.size === 1 && set.has(root.val)) {
      return helper(root.left) && helper(root.right)
    }
    return false
  }
}
