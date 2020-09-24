function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

var allPossibleFBT = function (N) {
  if (N % 2 === 0) return []
  if (N === 1) return [new TreeNode(0, null, null)]

  let res = []
  for (let i = 1; i < N; i++) {
    let L = allPossibleFBT(i)
    let R = allPossibleFBT(N - i - 1)
    L.forEach(l => {
      R.forEach(r => {
        let root = new TreeNode(0, l, r)
        res.push(root)
      })
    })
  }
  
  return res
}
