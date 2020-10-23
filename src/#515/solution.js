function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var largestValues = function (root) {
  let res = [];

  helper(root, 0);

  return res;

  function helper(root, level) {
    if (root === null) {
      return;
    }

    if (level >= res.length) {
      res.push(root.val);
    } else if (root.val > res[level]) {
      res[level] = root.val;
    }
    helper(root.left, level + 1);
    helper(root.right, level + 1);
  }
};
