function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var flipEquiv = function (root1, root2) {
  if (root1 === null && root2 === null) {
    return true;
  }
  if (root1 === null || root2 === null) {
    return false;
  }
  if (root1.val === root2.val) {
    let left = true;
    let right = true;
    if (root1.left !== null) {
      if (root2.left !== null && root2.left.val === root1.left.val) {
        left = flipEquiv(root1.left, root2.left);
      } else if (root2.right !== null && root2.right.val === root1.left.val) {
        left = flipEquiv(root1.left, root2.right);
      } else {
        left = false;
      }
    }
    if (root1.right !== null) {
      if (root2.left !== null && root2.left.val === root1.right.val) {
        right = flipEquiv(root1.right, root2.left);
      } else if (root2.right !== null && root2.right.val === root1.right.val) {
        right = flipEquiv(root1.right, root2.right);
      } else {
        right = false;
      }
    }
    return left && right;
  }
  return false;
};
