function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var maxLevelSum = function (root) {
  let total = [];
  helper(root, 0);
  let maxLv = 0;
  let maxNum = Number.MIN_SAFE_INTEGER;

  total.forEach((v, i) => {
    if (v > maxNum) {
      maxLv = i;
      maxNum = v;
    }
  });
  return maxLv + 1;

  function helper(root, level) {
    if (root === null) {
      return;
    }
    if (level >= total.length) {
      total.push(root.val);
    } else {
      total[level] += root.val;
    }

    helper(root.left, level + 1);
    helper(root.right, level + 1);
  }
};
