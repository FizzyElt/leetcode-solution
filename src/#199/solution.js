function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

var rightSideView = function (root) {
  let arr = []

  function traversal(root, level) {
    if (!root) {
      return
    }
    if (arr.length === level) {
      arr.push(root.val)
    }
    traversal(root.right, level + 1)
    traversal(root.left, level + 1)
  }

  traversal(root,0)


  return arr
}
