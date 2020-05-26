function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

var constructMaximumBinaryTree = function (nums) {
  function buildTree(nums = [], start = 0, end = 0) {
    if (nums.length == 0) {
      return null
    }
    let maxIndex = 0
    nums.forEach((v, i) => {
      if (v > nums[maxIndex]) {
        maxIndex = i
      }
    })
    let root = new TreeNode(nums[maxIndex], null, null)
    root.left = buildTree(nums.slice(0, maxIndex), start, maxIndex - 1)
    root.right = buildTree(nums.slice(maxIndex + 1, nums.length - 1), maxIndex + 1, end)
    return root
  }

  return buildTree(nums, 0, nums.length - 1)
}
