function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

var distributeCoins = function (root) {
  var res = 0
  dfs(root)
  return res

  function dfs(root) {
    if (root === null) {
      return 0
    }

    let left = dfs(root.left)
    let right = dfs(root.right)

    res += Math.abs(left) + Math.abs(right)

    return left + right + root.val - 1
  }
}
