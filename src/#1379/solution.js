function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

var getTargetCopy = function (original, cloned, target) {
  if (!cloned) {
    return null
  }

  if (cloned.val === target.val) {
    return cloned
  }

  return getTargetCopy(original, cloned.left, target) || getTargetCopy(original, cloned.right, target)
}
