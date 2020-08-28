function Node(val, children) {
  this.val = val
  this.children = children
}

var maxDepth = function (root) {
  if (root === null) {
    return 0
  }
  var m = 1
  for (let i = 0; i < root.children.length; i++) {
    m = Math.max(m, maxDepth(root.children[i]) + 1)
  }
  return m
}
