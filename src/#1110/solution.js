function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

var delNodes = function (root, to_delete) {
  let res = []

  let newRoot = helper(root, to_delete)
  if (newRoot) {
    res.push(newRoot)
  }
  return res

  function helper(root, toDel) {
    if (!root) return null

    root.left = helper(root.left, toDel)
    root.right = helper(root.right, toDel)
    for (let v of toDel) {
      if (v === root.val) {
        if (root.left) {
          res.push(root.left)
        }
        if (root.right) {
          res.push(root.right)
        }
        return null
      }
    }
    return root
  }
}
