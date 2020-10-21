function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var kthSmallest = function (root, k) {
  let ans = 0;
  let order = 0;
  helper(root, k);

  return ans;

  function helper(root, k) {
    if (root === null) {
      return;
    }
    helper(root.left, k);
    order++;
    if (order === k) {
      ans = root.val;
      return;
    }
    helper(root.right, k);
  }
};
