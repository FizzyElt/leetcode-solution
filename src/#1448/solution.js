function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

var goodNodes = function (root) {
  let count = 0

  function helper(root, maxNum) {
    if (!root) {
      return
    }
    if (root.val >= maxNum) {
      count++
      maxNum = root.val
    }
    helper(root.left, maxNum)
    helper(root.right, maxNum)
  }
  helper(root, -10000)
  return count
}
