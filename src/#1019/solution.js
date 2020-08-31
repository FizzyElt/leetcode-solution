function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

var nextLargerNodes = function (head) {
  if (head === null) {
    return []
  }
  let stack = []
  let res = []
  let i = 0
  let current = head
  while (current) {
    if (stack.length) {
      while (stack.length && current.val > stack[stack.length - 1].val) {
        res[stack.pop().index] = current.val
      }
    }
    stack.push({
      index: i,
      val: current.val,
    })
    i++
    current = current.next
  }
  stack.forEach(e => {
    res[e.index] = 0
  })
  return res
}
