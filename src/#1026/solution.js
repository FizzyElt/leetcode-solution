function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var maxAncestorDiff = function (root) {
  if (root === null) {
    return 0;
  }

  return helper(root, root.val, root.val);
  function helper(root, min, max) {
    if (root === null) {
      return max - min;
    }
    if (root.val > max) {
      max = root.val;
    }
    if (root.val < min) {
      min = root.val;
    }
    let left = helper(root.left, min, max);
    let right = helper(root.right, min, max);

    if (left > right) {
      return left;
    } else {
      return right;
    }
  }
};
