function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var findBottomLeftValue = function (root) {
  let maxLevel = 0;
  let res = 0;

  helper(root, 0);

  return res;

  function helper(root, level) {
    if (root === null) {
      return;
    }

    if (level >= maxLevel) {
      res = root.val;
      maxLevel++;
    }

    helper(root.left, level + 1);
    helper(root.right, level + 1);
  }
};
