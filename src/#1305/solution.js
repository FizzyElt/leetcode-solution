function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

var getAllElements = function (root1, root2) {
  const values1 = traverse(root1, [])
  const values2 = traverse(root2, [])

  let ans = []
  let i = 0,
    j = 0
  while (i < values1.length && j < values2.length) {
    if (values1[i] < values2[j]) {
      ans.push(values1[i])
      i++
    } else {
      ans.push(values2[j])
      j++
    }
  }
  if (i < values1.length) {
    ans = ans.concat(values1.slice(i))
  } else {
    ans = ans.concat(values2.slice(j))
  }
  return ans

  // in-order traversal
  function traverse(root, values) {
    if (!root) return values
    traverse(root.left, values)
    values.push(root.val)
    traverse(root.right, values)
    return values
  }
}
