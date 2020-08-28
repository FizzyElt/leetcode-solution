function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

var pseudoPalindromicPaths = function (root) {
  let res = 0
  let set = new Array(10).fill(0)

  helper(root, set)

  return res

  function helper(root, set) {
    let currentSet = [...set]
    if (root.left === null && root.right === null) {
      currentSet[root.val]++
      res += pseudoPalindromicCheck(currentSet)
      return
    }

    currentSet[root.val]++
    if (root.left !== null) {
      helper(root.left, currentSet)
    }
    if (root.right !== null) {
      helper(root.right, currentSet)
    }
  }
}

function pseudoPalindromicCheck(set) {
  let odd = 0

  set.forEach(v => {
    if (v % 2 === 1) {
      odd++
    }
  })

  if (odd > 1) {
    return 0
  }
  return 1
}
