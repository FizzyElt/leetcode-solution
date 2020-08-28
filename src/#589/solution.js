function Node(val, children) {
  this.val = val
  this.children = children
}

var preorder = function (root) {
  var arr = []

  helper(root)

  return arr

  function helper(node) {
    if (node === null) {
      return
    }
    arr.push(node.val)
    for (let i = 0; i < node.children.length; i++) {
      helper(node.children[i])
    }
  }
}
