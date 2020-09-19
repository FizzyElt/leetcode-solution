function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

var lcaDeepestLeaves = function (root) {
  if (root === null) {
    return root
  }
  let maxDepth = 0

  getMaxDepth(root, 0)
  return helper(root, 0, maxDepth - 1)

  function getMaxDepth(root, depth) {
    if (root === null) {
      if (depth > maxDepth) {
        maxDepth = depth
      }
      return
    }
    
    getMaxDepth(root.right, depth + 1)
    getMaxDepth(root.left, depth + 1)
  }

  function helper(root, depth, maxDepth) {
    if (root === null) {
      return null
    }

    if (root.left === null && root.right === null && depth === maxDepth) {
      return root
    }

    let nodeR = helper(root.right, depth + 1, maxDepth)
    let nodeL = helper(root.left, depth + 1, maxDepth)

    if (nodeR !== null && nodeL !== null) {
      return root
    }
    if (nodeR !== null) {
      return nodeR
    }
    if (nodeL !== null) {
      return nodeL
    }

    return null
  }
}
