function Node(val, left, right, next) {
  this.val = val === undefined ? null : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
  this.next = next === undefined ? null : next
}

var connect = function (root) {
  if (!root) return root
  let queue = [root]

  while (queue.length) {
    let num = queue.length

    for (let i = 0; i < num; i++) {
      let curr = queue.shift()

      if (i !== num - 1) {
        curr.next = queue[0]
      }

      if (curr.left) queue.push(curr.left)
      if (curr.right) queue.push(curr.right)
    }
  }
  return root
}
