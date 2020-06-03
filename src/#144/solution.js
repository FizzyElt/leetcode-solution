function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

var preorderTraversal = function (root) {
  let arr = []

  function traversal(root = null) {
    if (root === null) {
      return
    }

    arr.push(root.val)
    traversal(root.left)
    traversal(root.right)
  }
  traversal(root)

  return arr
}
