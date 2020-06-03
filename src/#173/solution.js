function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

var BSTIterator = function (root) {
  let arr = []

  function inorderTraversal(root) {
    if (!root) {
      return
    }
    inorderTraversal(root.left)
    arr.push(root.val)
    inorderTraversal(root.right)
  }
  inorderTraversal(root)
  this.inorderArr = arr
  this.index = 0
}

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  if (this.index < this.inorderArr.length) {
    let res = this.inorderArr[this.index]
    this.index++
    return res
  }
  return 0
}

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  if (this.index < this.inorderArr.length) {
    return true
  }
  return false
}
