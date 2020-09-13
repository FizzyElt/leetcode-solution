function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

var mergeKLists = function (lists) {
  if (lists.length === 0) {
    return null
  }

  let buckets = new Array(20001)
  buckets.fill(0)

  lists.forEach(n => {
    let current = n
    while (current !== null) {
      buckets[current.val + 10000] += 1
      current = current.next
    }
  })

  let head = new ListNode(0, null)
  let current = head

  buckets.forEach((v, i) => {
    if (v !== 0) {
      for (let j = 0; j < v; j++) {
        let node = new ListNode(i - 10000, null)
        current.next = node
        current = current.next
      }
    }
  })

  return head.next
}
