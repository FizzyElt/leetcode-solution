function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

var removeElements = function (head, val) {
  let dummy = new ListNode(-1, head)
  let p = dummy
  while (p.next !== null) {
    if (p.next.val == val) {
      p.next = p.next.next
      continue
    }
    p = p.next
  }
  return dummy.next
}
