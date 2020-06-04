function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

var invertTree = function (root) {
  if (root) {
    invertTree(root.left)
    invertTree(root.right)
    if (root.left || root.right) {  
        let temp=root.left
        root.left=root.right
        root.right=temp
    }
    return root
  } else {
    return null
  }
}
