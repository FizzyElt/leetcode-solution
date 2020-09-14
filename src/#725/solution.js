function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

var splitListToParts = function (root, k) {
  let res = new Array(k).fill(null)
  
  if (root === null) {
    return res
  }

  let current = root
  let count = 0

  while (current !== null) {
    count++
    current = current.next
  }

  let remainder = count % k
  let num = Math.floor(count / k)
  let prev = null
  current = root

  for (let i = 0; i < res.length; i++) {
    res[i] = current
    for (let j = 0; j < num; j++) {
      prev = current
      current = current.next
    }
    if (remainder > 0) {
      prev = current
      current = current.next
      remainder--
    }
    prev.next = null
  }

  return res
}
