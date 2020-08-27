function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

var mergeTrees = function (t1, t2) {
  if (t1 === null) {
    return t2
  }
  if (t2 === null) {
    return t1
  }

  t1.val += t2.val
  t1.left = mergeTrees(t1.left, t2.left)
  t1.right = mergeTrees(t1.right, t2.right)
  return t1
}
