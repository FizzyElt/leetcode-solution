function Node(val, children) {
  this.val = val;
  this.children = children;
}

var levelOrder = function (root) {
  if (root === null) {
    return [];
  }
  let res = [];
  helper(root, 0);

  return res;
  function helper(root, level) {
    if (root === null) {
      return;
    }
    if (level >= res.length) {
      res.push([root.val]);
    } else {
      res[level].push(root.val);
    }
    root.children.forEach((node) => {
      helper(node, level + 1);
    });
  }
};
