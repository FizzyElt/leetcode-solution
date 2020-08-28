function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

var increasingBST = function (root) {
  var arr = []
  inOrder(root)
  var head = new TreeNode(arr[0])
  var current = head

  for (let i = 1; i < arr.length; i++) {
    let node = new TreeNode(arr[i])
    current.right = node
    current = current.right
  }

  return head
  function inOrder(root) {
    if (root === null) {
      return
    }
    inOrder(root.left)
    arr.push(root.val)
    inOrder(root.right)
  }
}
