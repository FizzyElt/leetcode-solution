function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

var swapPairs = function (head) {
  if (head === null) {
    return null
  }
  if (head.next === null) {
    return head
  }
  let prev = new ListNode(0, null)
  let current = head
  head = head.next

  while (current.next !== null && current.next.next !== null) {
    if (current.next !== null) {
      let temp = current.next
      current.next = temp.next
      temp.next = current
      prev.next = temp
      prev = current
      current = current.next
    }
  }
  if (current.next !== null) {
    let temp = current.next
    current.next = temp.next
    temp.next = current
    prev.next = temp
  }

  return head
}
