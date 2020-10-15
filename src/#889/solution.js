function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var constructFromPrePost = function (pre, post) {
  if (pre.length === 0) {
    return null;
  }

  let root = new TreeNode(pre[0]);

  if (pre.length === 1) {
    return root;
  }

  pre.shift();
  post.pop();
  let leftLen = 0;
  post.forEach((v, i) => {
    if (v === pre[0]) {
      leftLen = i + 1;
    }
  });
  let leftPre = pre.slice(0, leftLen);
  let rightPre = pre.slice(leftLen);
  let leftPost = post.slice(0, leftLen);
  let rightPost = post.slice(leftLen);

  root.left = constructFromPrePost(leftPre, leftPost);
  root.right = constructFromPrePost(rightPre, rightPost);

  return root;
};
