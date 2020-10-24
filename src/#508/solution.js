function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var findFrequentTreeSum = function (root) {
  let m = new Map();
  let res = [];
  traverse(root);
  let max = -1;
  m.forEach((count, sum) => {
    if (count >= max) {
      if (count > max) {
        max = count;
        res = [];
      }
      res.push(sum);
    }
  });

  return res;

  function traverse(root) {
    if (root === null) {
      return 0;
    }
    let total = root.val + traverse(root.left) + traverse(root.right);

    if (m.has(total)) {
      m.set(total, m.get(total) + 1);
    } else {
      m.set(total, 1);
    }
    return total;
  }
};
